import { Component } from '@angular/core';

@Component({
  selector: 'app-producto',
  standalone: true,
  imports: [],
  templateUrl: './producto.component.html',
  styleUrl: './producto.component.scss'
})
export class ProductoComponent {

  producto = {
    name: 'Producto 1',
    image: './assets/images/toy.jpg',
    price: 100
  }
}
