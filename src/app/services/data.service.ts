import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  apiURL = "http://localhost:3000";
  // apiURL = "http://192.168.1.8:3000";
  // apiURL = "https://poimsm-server.herokuapp.com";

  constructor( private http: HttpClient ) { }

  getJobApplies(token) {
    const url = `${this.apiURL}/admin/jobs/all`;
    const headers = new HttpHeaders({
      Authorization: `JWT ${token}`
    });
    

    let params = new HttpParams();
    params = params.append('page', '1');
    params = params.append('records', '20');

    const options = { params, headers };

    return this.http.get(url, options).toPromise();  }
}
