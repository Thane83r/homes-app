import { Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import {DetailsComponent} from "./details/details.component";
import {ChartsComponent} from "./charts/charts.component";

const routeConfig: Routes = [
    {
        path: '',
        component: HomeComponent,
        title: 'Home Page'
    },
    {
        path: 'details/:id',
        component: DetailsComponent,
        title: 'Details Page'
    },
    {
        path: 'charts',
        component: ChartsComponent,
        title: 'Charts Page'
    }
];

export default routeConfig;