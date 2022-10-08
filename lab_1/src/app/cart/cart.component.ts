import { Component, OnInit } from '@angular/core';
import { proudact } from '../model/product';
import { category } from '../model/category';
import {CategoryService} from '../service/category.service'
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  category:category[]=[]
  Select:number=0;
  constructor(private CategoryService:CategoryService) {
    this.category = this.CategoryService.getAll()
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }



}
