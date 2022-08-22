import { Component, OnInit } from '@angular/core';
import { IEmployee } from '../models/employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-list',
  // templateUrl: './employee-list.component.html',
  template: `
    <h2>Employee list</h2>
    <p style="color: red;">{{errorMessage}}</p>
    <ul *ngFor="let employee of employees">
      <li>{{employee.name}}</li>
    </ul>
  `,
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
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
