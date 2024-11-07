import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignupModalComponent } from '../signup-modal/signup-modal.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, SignupModalComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  isModalOpen = false;

  openModal(event: Event): void {
    event.preventDefault();
    this.isModalOpen = true;
  }

  closeModal(): void {
    this.isModalOpen = false;
  }
}
