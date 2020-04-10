import { Component, OnInit } from '@angular/core';
import { crudService } from '../../crud.service';
@Component({
  selector: 'app-crudone',
  templateUrl: './crudone.component.html',
  styleUrls: ['./crudone.component.css']
})
export class CrudoneComponent implements OnInit {

  constructor(private crud:crudService) { }
  ngOnInit() {

  }
myData(datasend){
this.crud.setData(datasend["value"]);
}
}
