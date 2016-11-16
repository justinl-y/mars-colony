import './polyfills.ts';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic'; //angular library that will render the website - launch app
import { enableProdMode } from '@angular/core';
import { environment } from './environments/environment';
import { AppModule } from './app/';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule);
