import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

// New JSON typings
export type MusicTrack = {
  trackId: string;
  title: string;
  duration: string;
  trackUrl: string;
  thumbnail: string;
};

export type Album = {
  albumId: string;
  title: string;
  releaseYear: number;
  coverUrl: string;
  tracks: MusicTrack[];
};

export type Artist = {
  id: string;
  name: string;
  genre: string;
  albums: Album[];
};

export type MusicData = {
  artist: Artist;
};

export type FlattenedTrack = MusicTrack & {
  albumTitle: string;
  albumCover: string;
  artistName: string;
};


@Injectable({
  providedIn: 'root'
})
export class MusicServiceService {
  private http = inject(HttpClient);
  apiUrl = 'music-data.json'; // placed in /assets/music-data.json

  getMusicFromApi(): Observable<MusicData> {
    return this.http.get<MusicData>(this.apiUrl);
  }

  // constructor(private http:HttpClient)
  // {

  // }
}
