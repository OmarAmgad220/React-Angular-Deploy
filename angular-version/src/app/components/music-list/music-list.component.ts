import { Component, inject, OnInit, signal } from '@angular/core';
import { MusicServiceService } from './music-service.service';
import { catchError } from 'rxjs';

@Component({
  selector: 'music-list',
  imports: [],
  templateUrl: './music-list.component.html',
  styleUrl: './music-list.component.scss'
})
export class MusicListComponent implements OnInit{
  recordAngular = signal<any[]>([])
  totalRecordsAngular =signal<any[]>([])
  private loading=signal(true)
  private errorAngular = signal<unknown | undefined>(undefined)

  public musicService= inject(MusicServiceService)
  ngOnInit(): void {
      const fetchFunction = () => {
    try {
      this.loading.update(() => true)
      this.musicService.getMusicFromApi()
                        .pipe(catchError(err=>{ throw err}))
                        .subscribe(value=>  this.totalRecordsAngular.set([...value.mvids]));
      console.log("hello there")
    } catch (error) {
      console.error("Error fetching records:", error);
      this.errorAngular.set(error);
    } finally {
      this.loading.update(()=>false);
    }
  };
    fetchFunction();
  }

  infiniteScrollArgs = {
    numberOfItemToShow: 10,
    records: this.recordAngular,
    totalRecords: this.totalRecordsAngular,
    isLoading: this.loading,
    myError: this.errorAngular,
    onRecordsChange: (e:any) => this.recordAngular.set(e.detail),
  };
}
