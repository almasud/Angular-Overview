import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
    <div *ngIf="isNameVisible">ngIF</div>
    <div *ngIf="isNameVisible; then nameBlock else nameHiddenBlock"></div>

    <div *ngIf="isNameVisible">ngSwitch</div>
    <div [ngSwitch]="color">
      <h2 *ngSwitchCase="'red'">You picked red color.</h2>
      <h2 *ngSwitchCase="'green'">You picked green color.</h2>
      <h2 *ngSwitchCase="'blue'">You picked blue color.</h2>
      <h2 *ngSwitchDefault>Picked agian.</h2>
    </div>

    <div *ngIf="isNameVisible">ngFor</div>
    <h2 style="display: Inline;" *ngFor="let color of colors; index as i; last as l; odd as o">
      [{{i}}] <span [style.color]="o ? 'orange' : 'orange'">{{color}} <span *ngIf="!l">, </span></span>
    </h2>

    <ng-template #nameBlock>
      <h2>{{getGreetings()}}</h2>
    </ng-template>
    <ng-template #nameHiddenBlock>
      <h2>Name is hidden</h2>
    </ng-template>

  `,  // Inline template
  styles: [`

  `],  // Inside CSS
})
export class TestComponent implements OnInit {
  private name = "Almasud";
  public isNameVisible = true;
  public color = "red";
  public colors = ["red", "green", "blue"];

  constructor() { }

  ngOnInit(): void {
  }

  getGreetings() {
    return "Hello " + this.name;
  }

}
