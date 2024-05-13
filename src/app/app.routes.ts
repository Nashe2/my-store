import { Routes } from '@angular/router';
import { ImgComponent } from './pages/img/img.component';
import { AppComponent } from './app.component';
import { ProductoComponent } from './pages/producto/producto.component';

export const routes: Routes = [
  {
    path: 'img',
    component: ImgComponent,
  },
  {
    path: 'producto',
    component: ProductoComponent,
  }
];
