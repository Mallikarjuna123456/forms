import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OnerouterComponent } from './onerouter/onerouter.component';
import { TworouterComponent } from './tworouter/tworouter.component';
import { ThreerouterComponent } from './threerouter/threerouter.component';
import { PathrouterComponent } from './pathrouter/pathrouter.component';
import {RouterModule, Routes } from '@angular/router';
import { FiveComponent } from './threerouter/five/five.component';
import { SixComponent } from './threerouter/six/six.component';
import { FourComponent } from './threerouter/four/four.component';
import { LoginComponent } from './login/login.component';
import { LoginAuthGaurd } from './login-gaurd';
const routes:Routes=[
  {path:"",redirectTo:"login",pathMatch:"full"},
  {path:"one", component:OnerouterComponent, canActivate:[LoginAuthGaurd]},
  {path:"two", component:TworouterComponent, canActivate:[LoginAuthGaurd]},
  {path:"three", component:ThreerouterComponent, canActivate:[LoginAuthGaurd],

children:[
{ path:"four", component:FourComponent},
{ path:"five", component:FiveComponent},
{ path:"six", component:SixComponent}]
},
{
  path:"login",
  component:LoginComponent
}
]

@NgModule({
  declarations: [OnerouterComponent, TworouterComponent, ThreerouterComponent, PathrouterComponent, FourComponent, FiveComponent, SixComponent, LoginComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  providers:[LoginAuthGaurd],
  exports:[PathrouterComponent,ThreerouterComponent,LoginComponent,OnerouterComponent]
})
export class RoutingCompModule { }
