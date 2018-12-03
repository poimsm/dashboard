import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Subject } from "rxjs/Subject";
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // apiURL = "http://localhost:3000";
  // apiURL = "http://192.168.1.8:3000";
  apiURL = "https://poimsm-server.herokuapp.com"; 
  authState = new Subject<boolean>();
  hola = new Observable<boolean>();

  isAuth = false;

  constructor(
    public http: HttpClient
  ) {          this.authState.next(false);
  }

  async login(accessToken) {
    try {

      // const resToken: any = await this.getToken(accessToken);
      // const resUser: any = await this.getUser(resToken.token);
      // this.saveStorage(resUser.user, resToken.token);
      this.authState.next(true);
      this.isAuth = true;
      this.hola = new Observable(observer => observer.next(true));


    } catch (error) {
      this.hola = new Observable(observer => observer.next(false));

      this.authState.next(false);
      this.isAuth = false;

      console.log("Error", error);
    }
  }

  logout() {
    this.removeStorage();
    this.authState.next(false);
    this.isAuth = false;

    this.hola = new Observable(observer => observer.next(false));

  }

  saveStorage(user, token) {
    const credentials = { user, token }; 
      localStorage.setItem("credentials", JSON.stringify(credentials));
  }

  loadStorage() {
    return new Promise((resolve, reject) => {    
        if (localStorage.getItem("credentials")) {
          const retrievedData = localStorage.getItem("credentials");
          
          this.authState.next(true);
          this.isAuth = true;


          const data = {
            isAuth: true,
            user: JSON.parse(retrievedData).user,
            token: JSON.parse(retrievedData).token
          }
          
          resolve(data);
        } else {
          this.isAuth = false;

          this.authState.next(false);
          resolve({ isAuth: false });
        }      
    });
  }

  removeStorage() {  
    localStorage.removeItem("credentials");    
  }

  getToken(accessToken) {
    const url = `${this.apiURL}/users/oauth/facebook`;
    const body = { access_token: accessToken };
    return this.http.post(url, body).toPromise();
  }
  getUser(token) {
    const url = `${this.apiURL}/users/me`;
    const headers = new HttpHeaders({
      Authorization: `JWT ${token}`
    });
    return this.http.get(url, { headers }).toPromise();
  }
}
