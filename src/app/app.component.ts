import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ImgComponent } from "./pages/img/img.component";
import { FormsModule, } from '@angular/forms';
import { ProductoComponent } from "./pages/producto/producto.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, ImgComponent, FormsModule, ProductoComponent]
})
export class AppComponent {
  /* Propiedad que queremos pasar al componente hijo.
  Quiero que este componente envie y renderice una imagen */
  imgParent = '';

  onLoaded(img: string) {
    console.log('log padre', img);
  }
}
