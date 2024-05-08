import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ImgComponent } from "./pages/img/img.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, ImgComponent]
})
export class AppComponent {
  title = 'my-store';
}
