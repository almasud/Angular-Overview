import { Component } from '@angular/core';
import { AppConstant } from './util/app_constants';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular - Routing & Navigation';
  readonly appConstant = AppConstant;
}
