import { Routes } from '@angular/router';
import { HomeComponent } from './pages/login/home/home.component';
import { ProgressComponent } from './pages/progress/progress.component';
import { BidsComponent } from './pages/bids/bids.component';
import { BuysComponent } from './pages/buys/buys.component';
import { SalesComponent } from './pages/sales/sales.component';
import { ServiceComponent } from './pages/service/service.component';

export const routes: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'home', component: HomeComponent},
    {path: 'progress', component: ProgressComponent},
    {path: 'bids', component: BidsComponent},
    {path: 'buys', component: BuysComponent},
    {path: 'sales', component: SalesComponent},
    {path: 'service', component: ServiceComponent},
];
