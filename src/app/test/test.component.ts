import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-test', // Custom HTML tag selector
  // selector: '.app-test', // HTML class name selector
  // selector: '[app-test]', // HTML custom attribute selector
  // templateUrl: './test.component.html', // HTML template URL
  template: `
  <!-- Pipe (|) used to trasport data before rendering -->
      <h2>Hello {{name | titlecase}}</h2>
      <p>The value of PI is: {{3.141592653589793238 | number:'1.2-4'}}</p>
      <p>Toady: {{date | date:'dd/MM/YY hh:mm a'}}</p>
      <button (click)="fireEvent()">Send Event to Parent</button>
  `,  // Inline template
  // styleUrls: ['./test.component.css']  // CSS file URL
  styles: [`
      div {
        color: red;
      }
  `],  // Inside CSS
})
export class TestComponent implements OnInit {
  public date = new Date();
  @Input('parentName') public name: any;
  @Output() public childEvent = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  fireEvent() {
    this.childEvent.emit("Hey, Angular");
  }

}
