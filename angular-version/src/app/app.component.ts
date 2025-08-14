import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBarComponent } from "./components/nav-bar/nav-bar.component";
import { MusicListComponent } from "./components/music-list/music-list.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavBarComponent, MusicListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-version';
}
