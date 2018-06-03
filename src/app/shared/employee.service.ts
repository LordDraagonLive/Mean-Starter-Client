import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
// import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/toPromise';

import { Employee } from './employee.model';

@Injectable(
//   {
//   providedIn: 'root'
// }
)
export class EmployeeService {
  // selectedEmployee var can be used for findbyid, update and delete functions
  selectedEmployee: Employee;
  // the employees list from the db
  employess: Employee[];
  // the path to access the db employees collection
  readonly baseURL = 'http://localhost:3000/employees';

  constructor(private http: HttpClient) { }

  postEmployee(emp: Employee) {
    return this.http.post(this.baseURL, emp);
  }
}
