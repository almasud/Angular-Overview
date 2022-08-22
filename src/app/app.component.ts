import { Component } from '@angular/core';

export type Employee = {
  'id': number,
  'name': string,
  'age': number
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular Overview';
}
