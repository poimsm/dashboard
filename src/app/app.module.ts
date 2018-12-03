import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { GridContentComponent } from './components/grid-content/grid-content.component';
import { EmpresasComponent } from './components/empresas/empresas.component';
import { DeliveryComponent } from './components/delivery/delivery.component';
import { LoginComponent } from './components/login/login.component';
import { AuthService } from './services/auth.service';
import { AuthGuardService } from './services/auth-guard.service';
import { DataService } from './services/data.service';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';

export const firebaseConfig = {
  apiKey: "AIzaSyDbblV3zsLhNYwlHX_5_njNJj6KYXxEJi4",
  authDomain: "joopiterapp-2a5e4.firebaseapp.com",
  databaseURL: "https://joopiterapp-2a5e4.firebaseio.com",
  projectId: "joopiterapp-2a5e4",
  storageBucket: "joopiterapp-2a5e4.appspot.com",
  messagingSenderId: "140100374140"
};

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    GridContentComponent,
    EmpresasComponent,
    DeliveryComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireStorageModule
  ],
  providers: [
    AuthService,
    AuthGuardService,
    DataService   
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
