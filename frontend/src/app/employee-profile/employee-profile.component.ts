import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Employee, employees } from '../employees';

@Component({
  selector: 'app-employee-profile',
  templateUrl: './employee-profile.component.html',
  styleUrls: ['./employee-profile.component.css']
})
export class EmployeeProfileComponent implements OnInit{
  employee: Employee | undefined;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
      // First get the employee id from the current route.
      const routeParams = this.route.snapshot.paramMap;
      const employeeIdFromRoute = Number(routeParams.get('employeesId'));
    
      // Find the employee that correspond with the id provided in route.
      this.employee = employees.find(employee => employee.id === employeeIdFromRoute);
  }
}
