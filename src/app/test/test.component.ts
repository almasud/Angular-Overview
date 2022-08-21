import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
    <h3>{{getGreetings()}}</h3> <!-- Interpolation ({{}}) -->

    <!-- Interpolation is noly work with string so we need to property binding here -->
    <!-- <input disabled="{{isDisabled}}" type="text" value="Pvt. Ltd."> -->

    <!-- Property binding ([attribute]="property" or bind-attribute="property") -->
    <input [disabled]="!isDisabled" type="text" value="Property">
    <input bind-disabled="isDisabled" type="text" value="Binding">

    <!-- Class binding ([attribute.style_name]="property" or mgClass="property object") -->
    <h2> <span [class.text-danger]="hasError">Class </span> <span [ngClass]="messageObject">Binding</span></h2>

    <!-- In Angular Style bining ([style.css_attibute]="property" or mgStyle="property object")) is used to bind into inline CSS -->
    <h2> <span [style.color]="hasError ? 'red' : 'green'">Style </span> <span [ngStyle]="styleObject">Binding</span></h2>

     <!-- Event binding ((Angular HTML DOM event name)="event function or expression") -->
    <button (click)="onClick($event)">Event</button>
    <button (click)="eventStr='Binding again'">Event</button><br>{{eventStr}}<br>

    <!-- Template refernece variable (#Veriable_Name) -->
    <input #myInput type="text">
    <button (click)="logMessage(myInput.value)">Log</button><br><br>

    <!-- Two way biding ([(ngModel)]="property") 
    [] for property binding (Data flow class to tempalte) and () for event bidning (Data flow template to class) -->
    <input [(ngModel)]="twoWayBindStr" type="text">  <!-- Need to import FormsModule for ngModel in app module -->
    &nbsp; Two way binding: &nbsp; {{twoWayBindStr}}

  `,  // Inline template
  styles: [`
      .text-success {
        color: green;
      }
      .text-danger {
        color: red;
      }
      .text-special {
        font-style: italic;
      }
  `],  // Inside CSS
})
export class TestComponent implements OnInit {
  private name = "Almasud";
  public isDisabled = false;
  public hasError = false;
  public isSpecial = true;
  public messageObject = {
    'text-success': !this.hasError,
    'text-danger': this.hasError,
    'text-special': this.isSpecial,
  }
  public styleObject = {
    'color': 'blue',
    'font-style': 'italic'
  }
  public eventStr = "";
  public twoWayBindStr = "";

  constructor() { }

  ngOnInit(): void {
  }

  getName() {
    return this.name;
  }

  getGreetings() {
    return "Hello " + this.name;
  }

  onClick(event: any) {
    console.log(event);
    this.eventStr="Binding";
  }

  logMessage(message: String) {
    console.log(message);
  }

}
