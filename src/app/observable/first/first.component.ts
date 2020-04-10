import { Component, OnInit } from '@angular/core';
import { observableservice } from '../../observable.service';
@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {
count=0;
subs;
  constructor(private serv:observableservice) {
    this.serv.getObservable().subscribe((data)=>{
      console.log(data,"constructor call");
    });
    this.serv.getPromise().then((data:object)=>{
      console.log(data,"constructor call");
    })
   }

  ngOnInit() {
    this.subs=this.serv.getObservable().subscribe((data)=>{
      this.count++;
      console.log(data,"ngOnInit call");
    });
    this.serv.getPromise().then((data:object)=>{
      console.log(data,"ngOnInit call");
    });
    if(this.count>=1){
  this.subs.unsubscribe();
    }
  }

}
