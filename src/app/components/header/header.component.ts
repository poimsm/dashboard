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
 
  constructor(
    private _data: DataService, 
    private _auth:AuthService
    ) {
   }

   ngOnInit() { }

  choose(opt) {
    this.select = opt;
  }

  onLogout() {
    this._auth.logout();
  }
    
  
}
