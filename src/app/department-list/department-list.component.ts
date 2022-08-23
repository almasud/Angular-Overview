import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppConstant } from '../util/app_constants';

@Component({
  selector: 'app-department-list',
  template: `
    <h3>Department List</h3>
    <ul class="items">
      <li (click)="onSelected(department)" *ngFor="let department of departments">
        <span class="badge">{{department.id}}</span> {{department.name}}
      </li>
    </ul>
  `,
  styles: [
  ]
})
export class DepartmentListComponent implements OnInit {
  public departments = [
    {id: 1, name: 'NodeJS'},
    {id: 2, name: 'Angular'},
    {id: 3, name: 'Express'},
    {id: 4, name: 'MongoDB'}
  ]

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onSelected(department: any) {
    this.router.navigate([AppConstant.ROUTE_DEPARTMENTS, department.id]);
  }

}
