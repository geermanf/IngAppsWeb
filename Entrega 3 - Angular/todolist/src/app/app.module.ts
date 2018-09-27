import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app.routing';

import { AppComponent } from './app.component';
import { TodolistComponent } from './todolist/todolist.component';


@NgModule({
   declarations: [
      AppComponent,
      TodolistComponent
   ],
   imports: [
      BrowserModule,
      RouterModule,
      AppRoutingModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
