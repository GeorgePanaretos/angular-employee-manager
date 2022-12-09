import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

import { Employee } from '../employees';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor() { }

  ngOnInit() {}

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