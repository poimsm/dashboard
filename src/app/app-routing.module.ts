import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmpresasComponent } from './components/empresas/empresas.component';
import { GridContentComponent } from './components/grid-content/grid-content.component';
import { DeliveryComponent } from './components/delivery/delivery.component';
import { LoginComponent } from './components/login/login.component';
import { AuthGuardService } from './services/auth-guard.service';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {path: 'empresas', component: EmpresasComponent, canActivate: [ AuthGuardService ]},
  {path: 'grid', component: GridContentComponent, canActivate: [ AuthGuardService ]},
  {path: 'delivery', component: DeliveryComponent, canActivate: [ AuthGuardService ]},
  {path: 'login', component: LoginComponent},
  {path: 'home', component: HomeComponent},

  {path: '**', pathMatch: 'full', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
