import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'dashboard';
  constructor(private _auth:AuthService, private _router:Router) {
    // this._router.navigateByUrl('/home');

    _auth.loadStorage().then((data: any) => {
      if (data.isAuth) {
        console.log("PASOO1");
        
        this._router.navigateByUrl('/home');
      } else {
        this._router.navigateByUrl('/login');
      }
    });
  }
}
