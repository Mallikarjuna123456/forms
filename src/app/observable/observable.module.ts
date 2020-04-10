import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { observableservice } from '../observable.service';
import { FirstComponent } from '../observable/first/first.component';



@NgModule({
  declarations: [FirstComponent],
  imports: [
    CommonModule
  ],
  exports:[FirstComponent],
  providers:[observableservice]
})
export class ObservableModule { }
