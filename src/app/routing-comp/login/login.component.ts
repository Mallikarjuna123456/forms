import { Component, OnInit, ElementRef } from '@angular/core';
import { AuthService } from '../auth.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
isValid=true;
  constructor(private auth:AuthService,private act:ActivatedRoute,private route:Router) { }

  ngOnInit() {
  }
ogin(email:ElementRef,pswd:ElementRef,eve:Event){
  eve.preventDefault();
  this.auth.login(email["value"],pswd["value"]);
  //console.log(email['value'],pswd['value']);
// this.isValid = this.auth.login(email["value"],pswd["value"]);
// if(this.isValid){
//   this.router.navigate(["onerouter"]);
// }
if(this.auth.isLoggedIn){
  this.route.navigate(['/one']);
}
}
// isUserValid(){
//   return this.auth.isLoggedIn;
// }

}
