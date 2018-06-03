import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

// local import
import { EmployeeService } from '../shared/employee.service';
import { Employee } from '../shared/employee.model';

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
    this.refreshEmployeeList();
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
    if (form.value._id === '') {
      this.employeeService.postEmployee(form.value).subscribe((res) => {
        this.resetForm(form);
        this.refreshEmployeeList();
        M.toast({ html: 'Saved succesfully ! ', classes: 'rounded' });
      });
    } else {
        this.employeeService.putEmployee(form.value).subscribe((res) => {
          this.resetForm(form);
          this.refreshEmployeeList();
          M.toast({ html: 'Update succesfully ! ', classes: 'rounded' });
      });
    }
  }

  // get all employees on refresh
  refreshEmployeeList() {
    this.employeeService.getEmployeeList().subscribe((res) => {
      // const data = res as Employee[];
      this.employeeService.employees = res as Employee[];
      // M.toast({ html: 'Data ' + data[2].name, classes: 'rounded' });
    });
  }

  onEdit(emp: Employee) {
    this.employeeService.selectedEmployee = emp;
  }
}
