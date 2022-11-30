import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from './employees';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

   /**
    * Get Employees
  */
  public getEmployees(): Observable<Employee> {
    return this.http.get<Employee>('/assets/employee.json');
  }
  /**
    * Get Employees
  */
  // public getEmployees(): Observable<Employee[]> {
  //    return this.http.get<Employee[]>(`${this.apiServerUrl}/employee/all`);
  // }

  // /**
  //   * Add Employees
  // */
  //  public addEmployees(): Observable<Employee> {
  //   return this.http.post<Employee[]>(`${this.apiServerUrl}/employee/add`, employee);
  // }

  // /**
  //   * Update Employees
  // */
  //  public updateEmployees(): Observable<any> {
  //   return this.http.put<any>(`${this.apiServerUrl}/employee/update`, employee);
  // }

  // /**
  //   * Delete Employees
  // */
  //  public deleteEmployees(): Observable<void> {
  //   return this.http.delete<void>(`${this.apiServerUrl}/employee/delete/${employeeId}`);
  // }

}
