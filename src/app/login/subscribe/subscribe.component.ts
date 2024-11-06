import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-subscribe',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './subscribe.component.html',
  styleUrl: './subscribe.component.css'
})
export class SubscribeComponent {
  @Output() closeModal = new EventEmitter<void>();

  closeModalAction(): void {
    this.closeModal.emit();
  }
}
