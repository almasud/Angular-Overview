import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { AppConstant } from '../util/app_constants';

@Component({
  selector: 'app-department-list',
  template: `
    <h3>Department List</h3>
    <ul class="items">
      <li [class.selected]="isSelected(department)" (click)="onSelected(department)" *ngFor="let department of departments">
        <span class="badge">{{department.id}}</span> {{department.name}}
      </li>
    </ul>
  `,
  styles: [
  ]
})
export class DepartmentListComponent implements OnInit {
  public selectedId: any;
  public departments = [
    {id: 1, name: 'NodeJS'},
    {id: 2, name: 'Angular'},
    {id: 3, name: 'Express'},
    {id: 4, name: 'MongoDB'}
  ]

  constructor(private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.selectedId = parseInt(paramMap.get('id')!);
    });
  }

  onSelected(department: any) {
    // this.router.navigate([AppConstant.ROUTE_DEPARTMENTS, department.id]);
    // Relative navigation
    this.router.navigate([department.id], {relativeTo: this.activatedRoute});
  }

  isSelected(department: any) {
    return department.id === this.selectedId;
  }

}
