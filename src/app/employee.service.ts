import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IEmployee } from './models/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private _url = "./assets/data/employee.json";  // Should a remote URL

  constructor(private http: HttpClient) { }

  getEmployees(): Observable<IEmployee[]> {
    return this.http.get<IEmployee[]>(this._url);
  }

}
