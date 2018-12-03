import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor( private _data: DataService, private _auth:AuthService) {
    // this.fetch();
  }

   async fetch() {

    const retrieve: any = await this._auth.loadStorage();
    const token = retrieve.token;

    this._data.getJobApplies(token)
    .then(data => {console.log(data);
    })
    .catch(err => {
      console.log("ERROR1",err) 
      console.log("ERROR",err.error.message) });

   }

  ngOnInit() {
  }

}
