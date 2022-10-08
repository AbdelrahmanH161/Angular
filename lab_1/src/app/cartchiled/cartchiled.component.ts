import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { proudact } from '../model/product';
import { category } from '../model/category';
import { ProductService } from '../service/product.service';
import {CategoryService} from '../service/category.service'
@Component({
  selector: 'app-cartchiled',
  templateUrl: './cartchiled.component.html',
  styleUrls: ['./cartchiled.component.css']
})


export class CartchiledComponent implements OnInit ,OnChanges{
  // product:proudact[]
  FilterList:proudact[]
  @Input() selectcat:number=0;
  constructor(private ProductService:ProductService) {
    // this.product = this.ProductService.getAll()
    this.FilterList = ProductService.getAll()
  }
  
  ngOnChanges(changes: SimpleChanges): void {
    this.FilterList = this.ProductService.filtterByCategoryId(this.selectcat)
    console.log(this.selectcat)
  }
  ngOnInit(): void {
  }
  
}

