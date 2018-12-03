import { Component, OnInit, NgZone } from '@angular/core';
import { DataService } from '../../services/data.service';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  select = 'Dropdown';

  two = ['Food', 'Packs', 'Events', 'Services', 'Coupons']

  isAuth = false;

  hola = false;
  isAuth$: Observable<boolean>;
 
  constructor(
    private _data: DataService, 
    private _auth:AuthService
    ) {
    // _auth.authState.subscribe(state => {this.isAuth = state;
    // console.log(this.isAuth);
    // });

    this._auth.hola.subscribe(x => {this.hola = x;
    console.log("hola", this.hola);
    })

    this.isAuth$ = _auth.authState;
    // _data.getJobApplies().subscribe(data => console.log(data))
   }

   ngOnInit() { 
    this._auth.authState.subscribe(state => {this.isAuth = state;
      console.log(this.isAuth);
      });
   }

  choose(opt) {
    this.select = opt;
  }

  onLogout() {
    this._auth.logout();
  }
    
  
}
