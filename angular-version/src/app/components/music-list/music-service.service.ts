import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

export type MusicData={
  mvids: [
    {
       idTrack:  string | null,
       idAlbum :  string | null,
       strArtist :  string | null,
       strTrack :  string | null,
       intDuration :  string | null,
       strTrackThumb :  string | null,
       strMusicVid :  string | null,
       strDescriptionEN :  string | null,
       strMusicBrainzArtistID :  string | null,
       strMusicBrainzAlbumID : string | null,
       strMusicBrainzID :  string | null
    }
    ]
}

@Injectable({
  providedIn: 'root'
})
export class MusicServiceService {


  http = inject(HttpClient)

  getMusicFromApi()
  {
    return this.http.get<MusicData>("https://www.theaudiodb.com/api/v1/json/2/mvid.php?i=112024")
  }
}
