import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

import { Employee } from '../employees';
import { NgForm } from '@angular/forms';
import { EmployeeListComponent } from '../employee-list/employee-list.component';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor(private employeeListComponent: EmployeeListComponent, private sharedService: SharedService) { }

  ngOnInit() {}

  searchEmployees (key: string):void{
    this.employeeListComponent.searchEmployees(key);
  }

  onOpenModal (employee: Employee, mode: string):void {
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');
    if(mode === 'add'){
      button.setAttribute('data-target', '#addEmployeeModal')
    }
    container?.appendChild(button);
    button.click();
  }
}