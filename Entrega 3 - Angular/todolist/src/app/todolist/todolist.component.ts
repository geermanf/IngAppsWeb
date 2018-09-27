import { Component, OnInit } from '@angular/core';
import { Item } from '../model/Item';
import { MockService } from '../services/Mock.service';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {
  items: Item[];

  constructor(private mockService: MockService) {
  }

  ngOnInit() {
    this.mockService.mockItems().subscribe( data => this.items = data);
  }

  onEdit(item) {

  }

  onRemove(item) {
    this.mockService.removeItem(item).subscribe( data => this.items = data);
  }

}
