import { Component, inject, OnInit, signal ,CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { MusicServiceService } from './music-service.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'music-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './music-list.component.html',
  styleUrl: './music-list.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class MusicListComponent implements OnInit{
  recordAngular = signal<any[]>([])
  totalRecordsAngular =signal<any[]>([])
  private loading=signal(true)
  private errorAngular = signal<unknown | undefined>(undefined)

  public musicService= inject(MusicServiceService)

  fetchFunction = () => {
    this.loading.set(true);
    this.musicService.getMusicFromApi().subscribe({
            //value is API response(likely shaped like { mvids: [...] }).
      next: value => this.totalRecordsAngular.set([...value.track]), //runs when the HTTP request successfully emits a response
      error: err => {//catch like in try catch block
      this.errorAngular.set(err);
      this.loading.set(false);
    },
      complete: () => this.loading.set(false)// runs when the observable finishes
    });
  };

  ngOnInit(): void {
    this.fetchFunction();

  }
  formatDuration(durationMs: string | null): string {
    if (!durationMs) return '0:00';
    const totalSeconds = Math.floor(+durationMs / 1000);
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  }

  infiniteScrollArgs = {
    numberOfItemToShow: 15,
    records: this.recordAngular,
    totalRecords: this.totalRecordsAngular,
    isLoading: this.loading,
    myError: this.errorAngular,
    onRecordsChange: (e:any) => this.recordAngular.set(e.detail),
    fetchRecords: this.fetchFunction
  };
}
