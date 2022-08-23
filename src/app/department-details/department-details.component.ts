import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-department-details',
  template: `
    <h3>Youe selected depatment with id: {{departmentId}}</h3>
  `,
  styles: [
  ]
})
export class DepartmentDetailsComponent implements OnInit {
  public departmentId: any
  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.departmentId = this.activatedRoute.snapshot.paramMap.get('id');
  }

}
