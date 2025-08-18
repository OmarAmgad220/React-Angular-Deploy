import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export type MusicTrack = {
  idTrack: string | null;
  idAlbum: string | null;
  strArtist: string | null;
  strTrack: string | null;
  intDuration: string | null;
  strTrackThumb: string | null;
  strAlbum: string | null;
  strAlbumThumb: string | null; // optional
  strMusicFile: string | null;  // actual audio URL
};


export type MusicData = {
  track: MusicTrack[];
};

@Injectable({
  providedIn: 'root'
})
export class MusicServiceService {
  private http = inject(HttpClient);

  getMusicFromApi(): Observable<MusicData> {
    return this.http.get<MusicData>(
      'https://www.theaudiodb.com/api/v1/json/2/track.php?m=2402053'
    );
  }
}
