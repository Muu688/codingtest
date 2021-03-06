import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { Student } from '../../classes/student'

@Injectable()
export class StudentAPIService {

  private APIURL: string = environment.apiurl + 'students';
  constructor(private http: HttpClient) {
  }

  getStudents(): Observable<any> {
    return this.http.get(this.APIURL);
  }

  post(oStudent: Student): Observable<any> {
    console.log(oStudent);
    return this.http.post(this.APIURL, oStudent);
  }
}
