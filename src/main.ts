import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from "@angular/router";
import routeConfig from "./app/routes";
import {provideHttpClient} from "@angular/common/http";
import {provideEcharts} from "ngx-echarts";
import { provideAnimations } from '@angular/platform-browser/animations';

bootstrapApplication(AppComponent, {
    providers: [
    provideRouter(routeConfig),
    provideHttpClient(),
    provideEcharts(),
    provideAnimations()
]})
  .catch(err => console.error(err));
