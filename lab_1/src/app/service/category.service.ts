import { Injectable } from '@angular/core';
import { category } from '../model/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
category: category[];

constructor() { 
  this.category = [
    {
      id: 1,
      name: "Labtops"
    },
    {
      id: 2,
      name: "pc"
    }, {
      id: 3,
      name: "mobile"
    }, {
      id: 4,
      name: "tablets"
    }, {
      id: 0,
      name: "All"
    },
  ]

}

getAll() : category[]{
  return this.category
}
}
