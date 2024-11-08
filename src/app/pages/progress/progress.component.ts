import { Component } from '@angular/core';
import { MenuComponent } from '../../shared/menu/menu.component';

@Component({
  selector: 'app-progress',
  standalone: true,
  imports: [MenuComponent],
  templateUrl: './progress.component.html',
  styleUrl: './progress.component.css'
})
export class ProgressComponent {

}
