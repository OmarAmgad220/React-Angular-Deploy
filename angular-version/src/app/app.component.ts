import { Component ,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBarComponent } from "./components/nav-bar/nav-bar.component";
import { LeftSideMenuComponent } from "./components/left-side-menu/left-side-menu.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavBarComponent, LeftSideMenuComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppComponent {
  title = 'angular-version';
}
