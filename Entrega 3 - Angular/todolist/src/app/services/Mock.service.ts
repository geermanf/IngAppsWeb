import { Injectable } from '@angular/core';
import { Item } from '../model/Item';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class MockService {
  items: Item[];

  constructor() {
    this.items = [
      new Item('comprar verdura'),
      new Item('comprar pan'),
      new Item('comprar carne'),
    ];
  }

  mockItems(): Observable<Item[]> {
    return Observable.create(observer => {
      observer.next(this.items);
      observer.complete();
    });
  }

  removeItem(item): Observable<Item[]> {
    this.items = this.items.filter(i => i.name !== item.name);
    return this.mockItems();
  }
}

