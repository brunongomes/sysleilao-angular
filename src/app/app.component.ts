import { Component } from '@angular/core';
import { RouterOutlet, Router } from '@angular/router';
import { HomeComponent } from './pages/login/home/home.component';
import { MenuComponent } from './shared/menu/menu.component';
import { ProgressComponent } from './pages/progress/progress.component';
import { BidsComponent } from './pages/bids/bids.component';
import { BuysComponent } from './pages/buys/buys.component';
import { ServiceComponent } from './pages/service/service.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, 
    HomeComponent, 
    MenuComponent, 
    ProgressComponent,
    BidsComponent,
    BuysComponent,
    ServiceComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  constructor(private router: Router) {}

  isLoginPage(): boolean {
    return this.router.url === '/home';
  }
}
