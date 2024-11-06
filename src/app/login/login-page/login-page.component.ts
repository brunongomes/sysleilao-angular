import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubscribeComponent } from '../subscribe/subscribe.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, SubscribeComponent],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css'
})
export class LoginPageComponent {
  isModalOpen = false;

  openModal(event: Event): void {
    event.preventDefault();
    this.isModalOpen = true;
  }

  closeModal(): void {
    this.isModalOpen = false;
  }
}
