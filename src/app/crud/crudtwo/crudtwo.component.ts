import { Component, OnInit } from '@angular/core';
import { crudService } from 'src/app/crud.service';

@Component({
  selector: 'app-crudtwo',
  templateUrl: './crudtwo.component.html',
  styleUrls: ['./crudtwo.component.css']
})
export class CrudtwoComponent implements OnInit {
dataupd;
  constructor(private crud:crudService) { }
  recieveData(upd){
    this.dataupd=this.crud.getData();
  }
  modify(chnge){
    chnge.edit=true;
  }
  myFunc(){
    
  }
  update(){

  }
  delete(){

  }
  ngOnInit() {
  }

}
