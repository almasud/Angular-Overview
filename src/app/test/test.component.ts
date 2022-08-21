import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test', // Custom HTML tag selector
  // selector: '.app-test', // HTML class name selector
  // selector: '[app-test]', // HTML custom attribute selector
  // templateUrl: './test.component.html', // HTML template URL
  template: `
    <h3>{{getGreetings()}}</h3> <!-- Interpolation ({{}}) -->
    <h3>Current url: <a target="_blank" href="{{getCurrentUrl()}}">{{getCurrentUrl()}}</a></h3>
  `,  // Inline template
  // styleUrls: ['./test.component.css']  // CSS file URL
  styles: [`
      div {
        color: red;
      }
  `],  // Inside CSS
})
export class TestComponent implements OnInit {
  private name = "NybSys";

  constructor() { }

  ngOnInit(): void {
  }

  getGreetings() {
    return "Hello " + this.name;
  }

  getCurrentUrl() {
    return window.location.href;
  }

}
