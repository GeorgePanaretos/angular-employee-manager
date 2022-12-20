import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeProfileComponent } from './employee-profile/employee-profile.component';

const routes: Routes = [
  {path: '', component:EmployeeListComponent},
  {path: 'employees', component: EmployeeListComponent },
  {path: 'employees/:employeesId', component: EmployeeProfileComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
