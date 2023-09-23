import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from './employees';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private apiServerUrl = environment.apiBaseUrl;

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }
    // Get via json
    // getEmployees(): Observable<Employee[]> {
    //   return this.http.get<Employee[]>('assets/employees.json');
    // } 
  
  // Get Employees
  public getEmployees(): Observable<Employee[]> {
     return this.http.get<Employee[]>(`${this.apiServerUrl}/employee/all`);
  }

  //Add Employees
  public addEmployee(employee: Employee): Observable<Employee> {
     return this.http.post<Employee>(`${this.apiServerUrl}/employee/add`, employee);
   }

  //Update Employees
   public updateEmployee(employee: Employee): Observable<Employee> {
     return this.http.put<Employee>(`${this.apiServerUrl}/employee/update`, employee);
   }


  //Delete Employees
   public deleteEmployee(employeeId: number): Observable<void> {
     return this.http.delete<void>(`${this.apiServerUrl}/employee/delete/${employeeId}`);
   }

}