import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ObservableModule } from './observable/observable.module';
import { RoutingCompModule } from './routing-comp/routing-comp.module';
import {RouterModule, Routes } from '@angular/router';
import { AuthService } from './routing-comp/auth.service';
import { CrudModule } from './crud/crud.module';
import { crudService } from './crud.service';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ObservableModule,
    RoutingCompModule,
    RouterModule.forRoot([]),
    CrudModule
  ],
  providers: [AuthService,crudService],
  bootstrap: [AppComponent]
})
export class AppModule { }
