import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http: HttpClient) { }
    private apiServerUrl = '';

    /**
      * Get Employees
    */
  public getEmployees(): Observable<any> {
    return this.http.get<any>(`${this.apiServerUrl}/employee/all`);
  }

}
