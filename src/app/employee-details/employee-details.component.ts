import { Component, OnInit } from '@angular/core';
import { IEmployee } from '../models/employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-details',
  // templateUrl: './employee-details.component.html',
  template: `
    <h2>Employee details</h2>
    <p style="color: red;">{{errorMessage}}</p>
    <ul *ngFor="let employee of employees; index as i">
      <li>{{i+1}}. {{employee.name}} - {{employee.age}}</li>
    </ul>
  `,
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {
  public employees: IEmployee[] = [];
  public errorMessage = "";

  constructor(private _employeeService: EmployeeService) { }

  ngOnInit(): void {
    this._employeeService.getEmployees()
    .subscribe({
      next: (data) => this.employees = data,
      error: (e) => this.errorMessage = e
    });
  }

}
