import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-img',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './img.component.html',
  styleUrl: './img.component.scss'
})
export class ImgComponent {
/* Con @Input ImgComponent ya puede recibir datos del hijo */
@Input() img: string = 'valor init';
}
