import { Routes, RouterModule } from '@angular/router';
import { TodolistComponent } from './todolist/todolist.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
  { path: 'items', component: TodolistComponent },
  { path: '', redirectTo: 'items', pathMatch: 'full' },
  { path: '**', redirectTo: 'items', pathMatch: 'full' },
];


@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
  ],
})
export class AppRoutingModule { }

