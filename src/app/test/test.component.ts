import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-test', // Custom HTML tag selector
  // selector: '.app-test', // HTML class name selector
  // selector: '[app-test]', // HTML custom attribute selector
  // templateUrl: './test.component.html', // HTML template URL
  template: `
      <h2>Hello {{name}}</h2>
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
  @Input('parentName') public name: any;
  @Output() public childEvent = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  fireEvent() {
    this.childEvent.emit("Hey, Angular");
  }

}
