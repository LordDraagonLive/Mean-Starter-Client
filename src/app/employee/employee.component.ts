import { Component, OnInit } from '@angular/core';
// local import
import { EmployeeService } from '../shared/employee.service';
import { NgForm } from '@angular/forms';

declare var M: any;

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
  providers: [EmployeeService]
})
export class EmployeeComponent implements OnInit {

  constructor(private employeeService: EmployeeService) { }

  ngOnInit() {
    this.resetForm();
  }

  // '?' means the parameter is nullable (can be null)
  resetForm(form?: NgForm) {
    if (form) {
      form.reset();
    }
    this.employeeService.selectedEmployee = {
      _id: '',
      name: '',
      position: '',
      office: '',
      salary: null
    };
  }

  // on form submission
  onSubmit(form: NgForm) {
    // res = respond
    this.employeeService.postEmployee(form.value).subscribe((res) => {
      this.resetForm();
      M.toast({ html: 'Saved succesfully ! ', classes: 'rounded' });
    });
  }

}
