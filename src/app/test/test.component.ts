import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test', // Custom HTML tag selector
  // selector: '.app-test', // HTML class name selector
  // selector: '[app-test]', // HTML custom attribute selector
  // templateUrl: './test.component.html', // HTML template URL
  template: `<div>
                Inline template
              </div>`,  // Inline template
  // styleUrls: ['./test.component.css']  // CSS file URL
  styles: [`
      div {
        color: red;
      }
  `],  // Inside CSS
})
export class TestComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
