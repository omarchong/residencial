import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
}
from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})

export class EmployeeService {
  base: string = "https://gpds-utvt102.herokuapp.com/"
  versionApi: string = "api/v1"
  URI: string = this.base + this.versionApi
  headers = new HttpHeaders().set("Content-Type", "application/json")

  constructor(private http: HttpClient) { }
  getEmployee(){
    return this.http.get(`${this.URI}/employees`).subscribe(data => {
      console.log(data);
    });
  }
}
