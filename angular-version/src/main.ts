import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { defineCustomElements } from "@amiraelgarf/custom-frontend-library/loader";

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));

defineCustomElements(window);
