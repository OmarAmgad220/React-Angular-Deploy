import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path:"music",
    loadComponent : () => {
      return import("./components/music-list/music-list.component").then((m)=>m.MusicListComponent)
    }
  }
];
