import { Component, OnInit, Input } from '@angular/core';
/* Importo indeciso */
import { Producto } from '../../models/producto.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-producto',
  standalone: true,
  imports: [ProductoComponent],
  templateUrl: './producto.component.html',
  styleUrl: './producto.component.scss',
})
export class ProductoComponent {

  @Input() producto: Producto = {
    id: '',
    price: 0,
    image: '',
    name: ''
  };

  constructor(){}

    ngOnInit(): void{

    }

}
