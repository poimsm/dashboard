import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { auth } from 'firebase/app';
declare var FB: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  password: string;
  email: string;

  constructor(
    private afAuth: AngularFireAuth,
    private _auth: AuthService,
    private _router:Router
    ) { }

    ngOnInit() {

      (window as any).fbAsyncInit = function() {
        FB.init({
          appId      : '1851546425153902',
          cookie     : true,
          xfbml      : true,
          version    : 'v3.1'
        });
        FB.AppEvents.logPageView();
      };
  
      (function(d, s, id) {
         var js, fjs = d.getElementsByTagName(s)[0];
         if (d.getElementById(id)) {return;}
         js = d.createElement(s); js.id = id;
         js.src = "https://connect.facebook.net/en_US/sdk.js";
         fjs.parentNode.insertBefore(js, fjs);
       } (document, 'script', 'facebook-jssdk'));
  
    }

  submitLogin(){
    FB.login((response)=> {
      if (response.authResponse) {

        const access_token = response.authResponse.accessToken;        
        this._auth.login(access_token);
        this._router.navigateByUrl('/home');
        
        } else {
        console.log('User cancelled login or did not fully authorize.');
        }
      });
  }
  

}
