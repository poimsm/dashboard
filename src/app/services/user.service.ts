import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  isAuth = false;

  constructor() { }

  login(data) {
   
    console.log('hola');
    this.isAuth = true;    
  }

  logout() {
    console.log('hola');
    this.isAuth = false;    
  }

  storage(token) {
    // Check browser support
    if (typeof(Storage) !== "undefined") {
      // Store
      localStorage.setItem("token", token);
      // Retrieve
      localStorage.getItem("lastname");
    } else {
      console.log('Sorry, your browser does not support Web Storage...');
    }
  }
}
