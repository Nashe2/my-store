import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { emit } from 'process';

@Component({
  selector: 'app-img',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './img.component.html',
  styleUrl: './img.component.scss',
})
export class ImgComponent {
  /* Con @Input ImgComponent ya puede recibir datos del hijo */
  @Input() img: string = 'valor init';
  @Output() loaded = new EventEmitter<string>();

  imageDefault = '/assets/images/default.png';

  imgError() {
    this.img = this.imageDefault;
  }

  imgLoaded() {
    console.log('log hijo');
    this.loaded.emit(this.img);
  }
}
