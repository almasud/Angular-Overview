import { Component, OnInit } from '@angular/core';
import { Employee } from '../app.component';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-details',
  // templateUrl: './employee-details.component.html',
  template: `
    <h2>Employee details</h2>
    <ul *ngFor="let employee of employees; index as i">
      <li>{{i+1}}. {{employee.name}} - {{employee.age}}</li>
    </ul>
  `,
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {
  public employees: Employee[] = [];

  constructor(private _employeeService: EmployeeService) { }

  ngOnInit(): void {
    this.employees = this._employeeService.getEmployees();
  }

}
