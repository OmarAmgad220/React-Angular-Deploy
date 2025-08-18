import { Component, inject, OnInit, signal, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MusicServiceService, MusicData, FlattenedTrack } from './music-service.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'music-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './music-list.component.html',
  styleUrl: './music-list.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class MusicListComponent implements OnInit {
  recordAngular = signal<FlattenedTrack[]>([]);
  totalRecordsAngular = signal<FlattenedTrack[]>([]);
  private loading = signal(true);
  private errorAngular = signal<unknown | undefined>(undefined);

  public musicService = inject(MusicServiceService);

  fetchFunction = () => {
    this.loading.set(true);
    this.musicService.getMusicFromApi().subscribe({
      next: (value: MusicData) => {
        // Flatten all tracks across all albums
        const allTracks: FlattenedTrack[] = value.artist.albums.flatMap(album =>
          album.tracks.map(track => ({
            ...track,
            albumTitle: album.title,
            albumCover: album.coverUrl,
            artistName: value.artist.name
          }))
        );

        this.totalRecordsAngular.set(allTracks);
      },
      error: err => {
        this.errorAngular.set(err);
        this.loading.set(false);
      },
      complete: () => this.loading.set(false)
    });
  };

  ngOnInit(): void {
    this.fetchFunction();
  }

  formatDuration(duration: string): string {
    return duration || '0:00';
  }

  infiniteScrollArgs = {
    numberOfItemToShow: 13,
    records: this.recordAngular,
    totalRecords: this.totalRecordsAngular,
    isLoading: this.loading,
    myError: this.errorAngular,
    onRecordsChange: (e: any) => this.recordAngular.set(e.detail),
    fetchRecords: this.fetchFunction
  };

  isShow = signal(false);

  private selectedTrackSignal = signal<FlattenedTrack | null>(null);
  selectedTrack = this.selectedTrackSignal;
  
  onClickHandel(track: FlattenedTrack) {
    this.selectedTrackSignal.set(track);
    this.isShow.set(true);
  }
}
