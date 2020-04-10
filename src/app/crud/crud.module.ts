import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CrudoneComponent } from './crudone/crudone.component';
import { CrudtwoComponent } from './crudtwo/crudtwo.component';
import { CrudthreeComponent } from './crudthree/crudthree.component';



@NgModule({
  declarations: [CrudoneComponent, CrudtwoComponent, CrudthreeComponent],
  imports: [
    CommonModule
  ],
  exports:[CrudthreeComponent]
})
export class CrudModule { }
