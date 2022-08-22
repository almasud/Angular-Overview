import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor() { }

  getEmployees() {
    return [
      { 'id': 1, 'name': 'Abdullah', 'age': 24 },
      { 'id': 2, 'name': 'Almasud', 'age': 27 },
      { 'id': 3, 'name': 'Mahin', 'age': 35 },
    ];
  }
  
}
