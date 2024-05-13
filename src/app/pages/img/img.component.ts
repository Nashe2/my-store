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
  /* Con @Input ImgComponent ya puede recibir datos del padre */
  @Input() img: string = ''; //Propiedad de entrada
  @Output() loadedEvent = new EventEmitter<string>();

  imageDefault = '/assets/images/default.png';

  imgError() {
    this.img = this.imageDefault;
  }

  /*  */
  imgLoadedEvent() {
    console.log('log hijo');
    this.loadedEvent.emit(this.img);
  }
}
