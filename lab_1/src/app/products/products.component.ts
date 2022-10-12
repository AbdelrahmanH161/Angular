import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
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
  item!:proudact

  constructor(private ProductService:ProductService){
    
  }
  ngOnInit(): void {
    this.ProductService.getAll().subscribe((res)=>{
      this.product.push(...res)
    })
  }
    addtocart(id:number){
      let item = this.product.find(item=> item.id == id)!
      console.log(item)
      this.ProductService.addcart(item)
  }
}
