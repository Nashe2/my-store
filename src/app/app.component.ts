import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ImgComponent } from './pages/img/img.component';
import { FormsModule } from '@angular/forms';
import { ProductoComponent } from './pages/producto/producto.component';
import { Producto } from './models/producto.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [
    RouterOutlet,
    ImgComponent,
    FormsModule,
    CommonModule,
    ProductoComponent,
  ],
})
export class AppComponent {
  /* Propiedad que queremos pasar al componente hijo.
  Quiero que este componente envie y renderice una imagen */
  imgParent = '';

  /* se declara un array de productos para enviarselo
y reutilizar el componente */

  /* Array de prodcutos que enviaremos al componente hijo */
  productos: Producto[] = [
    {
      id: '1',
      name: 'EL mejor juguete',
      price: 565,
      image: './assets/images/toy.jpg',
    },
    {
      id: '2',
      name: 'Bicicleta casi nueva',
      price: 356,
      image: './assets/images/bike.jpg',
    },
    {
      id: '3',
      name: 'Colleción de albumnes',
      price: 34,
      image: './assets/images/album.jpg',
    },
    {
      id: '4',
      name: 'Mis libros',
      price: 23,
      image: './assets/images/books.jpg',
    },
    {
      id: '5',
      name: 'Casita michi',
      price: 125,
      image: './assets/images/house.jpg',
    },
    {
      id: '6',
      name: 'Lentes vintage',
      price: 82,
      image: './assets/images/glasses.jpg',
    },
  ];

  onLoaded(img: string) {
    console.log('log padre', img);
  }
}
