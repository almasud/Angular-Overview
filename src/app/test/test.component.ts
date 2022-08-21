import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
    <div *ngIf="true">ngIF</div>
    <div *ngIf="isNameVisible; then nameBlock else nameHiddenBlock"></div>

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

  constructor() { }

  ngOnInit(): void {
  }

  getGreetings() {
    return "Hello " + this.name;
  }

}
