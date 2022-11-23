import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeProfileComponent } from './employee-profile/employee-profile.component';
import { EmployeeService } from './employee.service';
import { NavBarComponent } from "./nav-bar/nav-bar.component";

@NgModule({
    declarations: [
        AppComponent,
        EmployeeListComponent,
        EmployeeProfileComponent,
        NavBarComponent
    ],
    providers: [EmployeeService],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
    ]
})
export class AppModule { }
