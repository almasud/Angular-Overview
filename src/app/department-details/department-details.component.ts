import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { AppConstant } from '../util/app_constants';

@Component({
  selector: 'app-department-details',
  template: `
    <h3>Youe selected depatment with id: {{departmentId}}</h3>
    <button (click)="goPrevious()">Previous</button>
    <button (click)="goNext()">Next</button>
    <div>
      <button style="margin-top: 8px;" (click)="goBack()">Back</button>
    </div>
  `,
  styles: [
  ]
})
export class DepartmentDetailsComponent implements OnInit {
  public departmentId: any;

  constructor(private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    // When we try to go back or go forward in the same component angular reuse this isntead of loading as new
    // this.departmentId = parseInt(this.activatedRoute.snapshot.paramMap.get('id')!);

    // To overcome this we can use observable instead of snapshot to get the new route 
    // Id while navigating in the same page.
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.departmentId = parseInt(paramMap.get('id')!);
    });

  }

  goPrevious() {
    this.router.navigate([AppConstant.ROUTE_DEPARTMENTS, this.departmentId - 1]);
  }

  goNext() {
    this.router.navigate([AppConstant.ROUTE_DEPARTMENTS, this.departmentId + 1]);
  }

  goBack() {
    // Optional route parameters {property: value}
    this.router.navigate([AppConstant.ROUTE_DEPARTMENTS, {id: this.departmentId}]);
  }

}
