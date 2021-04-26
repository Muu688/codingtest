import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { environment } from 'environments/environment';
import { Subject } from '../../classes/subject'


@Injectable()
export class SubjectAPIService {

  private APIURL: string = environment.apiurl + 'subjects';
  constructor(private http: HttpClient) {
  }

  getSubjects(): Observable<any> {
    return this.http.get(this.APIURL);
  }

  post(oSubject: Subject): Observable<any> {
    console.log(oSubject);
    return this.http.post(this.APIURL, oSubject);
  }
}
