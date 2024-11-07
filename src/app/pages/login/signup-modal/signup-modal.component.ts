import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-signup-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './signup-modal.component.html',
  styleUrl: './signup-modal.component.css'
})
export class SignupModalComponent {
  @Output() closeModal = new EventEmitter<void>();

  closeModalAction(): void {
    this.closeModal.emit();
  }
}
