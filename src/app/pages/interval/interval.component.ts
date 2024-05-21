import {
  AfterViewInit,
  Component,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
  signal,
} from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-interval',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './interval.component.html',
  styleUrl: './interval.component.scss',
})
export class IntervalComponent
  implements OnInit, OnDestroy
{
  counter = signal(0);
  counterFn: any;

  ngOnInit(): void {
    this.counterFn = setInterval(() => {
      this.counter.set(this.counter() + 1);
      console.log('run counter');
    }, 1000);
  }

  ngOnDestroy() {
    console.log('ngOnDestroy');
    clearInterval(this.counterFn);
  }
}
