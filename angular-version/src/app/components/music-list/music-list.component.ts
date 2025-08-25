import { Component, inject, OnInit, signal, CUSTOM_ELEMENTS_SCHEMA,computed, linkedSignal  } from '@angular/core';
import { MusicServiceService, MusicData, FlattenedTrack } from './music-service.service';
import { CommonModule } from '@angular/common';
import { firstValueFrom } from 'rxjs';
import { NavSelectedItmeService } from '../nav-bar/nav-selectedItme.service';
import { LeftSideMenuComponent } from '../left-side-menu/left-side-menu.component';


export let allSongData!:FlattenedTrack[]
@Component({
  selector: 'music-list',
  standalone: true,
  imports: [CommonModule,LeftSideMenuComponent],
  templateUrl: './music-list.component.html',
  styleUrl: './music-list.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class MusicListComponent implements OnInit {
  recordAngular = signal<FlattenedTrack[]>([]);
  totalRecordsAngular = signal<FlattenedTrack[]>([]);
  loading = signal(true);
  errorAngular = signal<unknown | undefined>(undefined);
  public musicService = inject(MusicServiceService);

  nameOfArtist!:string
  fetchFunction = async () => {
    this.loading.set(true);

    try {
      const value = await firstValueFrom(this.musicService.getMusicFromApi());

      const allTracks: FlattenedTrack[] = value.artist.albums.flatMap(album =>
        album.tracks.map(track => ({
          ...track,
          albumTitle: album.title,
          albumCover: album.coverUrl,
          artistName: value.artist.name
        }))
      );

      this.totalRecordsAngular.set(allTracks);
      this.nameOfArtist = allTracks[0].artistName;
      allSongData = allTracks
    } catch (err) {
      this.errorAngular.set(err);
    } finally {
      this.loading.set(false);
    }
  };


  ngOnInit(): void {
    this.fetchFunction();
  }

  formatDuration(duration: string): string {
    return duration || '0:00';
  }

  infiniteScrollArgs = {
    numberOfItemToShow: 10,
    records: this.recordAngular,
    totalRecords: this.totalRecordsAngular,
    isLoading: this.loading,
    myError: this.errorAngular,
    onRecordsChange: (e: any) => this.recordAngular.set(e.detail),
    fetchRecords: this.fetchFunction
  };

  isShow = signal(false);
  selectedTrackSignal = signal<FlattenedTrack | null>(null);

  private NavSearchService = inject(NavSelectedItmeService)


  onClickHandel(track: FlattenedTrack) {
    this.selectedTrackSignal.set(track);
    this.isShow.set(true);
    this.NavSearchService.dropDownClick.set(false)
  }

  selectedFromNav = this.NavSearchService.getSelectedItem();

  currentSelectedTrack = linkedSignal(():any =>
  {
    if(this.NavSearchService.dropDownClick()=== true)
    {
       return this.selectedFromNav()
    }
    else
    {
      return this.selectedTrackSignal()
    }
  }
  );

  

}
