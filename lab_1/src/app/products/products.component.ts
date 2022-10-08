import { Component, OnInit } from '@angular/core';
import { proudact } from '../model/product';
// import { proudact } from '../model/product';
import { ProductService } from '../service/product.service';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})

export class ProductsComponent implements OnInit{
  product:proudact[]=[]
  constructor(private ProductService:ProductService){
    //  = ProductService
    this.product = this.ProductService.getAll()
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

}
