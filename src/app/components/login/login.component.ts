import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  password: string;
  email: string;

  constructor(
    private _auth: AuthService
    ) { }

    login(){
      const access_token = "EAAaTZBL702W4BALzFQEadOnn1O5YQsqKeNSavYubhxKkMtPA2fmFuRLBpCeIL5htJ85h6EOuc5AW2VPbHWt6y5ZAhBzuOV1KVW1rJnD2m0dbXKt32mvwdpQ3baKyQySpBUqM6QVdjOcUBPdZBS0OZCFHgrA7MwcZD";
      this._auth.login(access_token);
    }
    ngOnInit() {}
  

}
