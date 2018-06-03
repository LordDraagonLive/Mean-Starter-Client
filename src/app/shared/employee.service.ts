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
  employees: Employee[];
  // the path to access the db employees collection
  readonly baseURL = 'http://localhost:3000/employees';

  constructor(private http: HttpClient) { }

  // sends user entered data of the form to the db using express & nodejs with
  // the help of CORS middleware in backend
  postEmployee(emp: Employee) {
    return this.http.post(this.baseURL, emp);
  }

  // gets all te employees from the db through express
  getEmployeeList() {
    return this.http.get(this.baseURL);
  }

  // updates employees in the db
  putEmployee(emp: Employee) {
    return this.http.put(this.baseURL + `/${ emp._id }`, emp);
  }

}
