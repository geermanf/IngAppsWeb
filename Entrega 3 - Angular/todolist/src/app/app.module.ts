import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app.routing';

import { AppComponent } from './app.component';
import { TodolistComponent } from './todolist/todolist.component';
import { LoginComponent } from './login/login.component';

import { AuthGuard } from './guards/auth.guard';


@NgModule({
    declarations: [
        AppComponent,
        TodolistComponent,
        LoginComponent,
    ],
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule,
        AppRoutingModule
    ],
    providers: [AuthGuard],
    bootstrap: [AppComponent]
})
export class AppModule { }
