import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
//import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private apiServerUrl = '';

  constructor(private http: HttpClient) { }

  /**
    * Get Employees
  */
  public getEmployees(): Observable<any> {
    return this.http.get<any>(`${this.apiServerUrl}/employee/all`);
  }

  /**
    * Add Employees
  */
  //  public addEmployees(): Observable<any> {
  //   return this.http.post<any>(`${this.apiServerUrl}/employee/add`, employee);
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
