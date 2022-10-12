import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { proudact } from '../model/product';
import { category } from '../model/category';
import { ProductService } from '../service/product.service';
import {CategoryService} from '../service/category.service'
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../service/cart.service';
@Component({
  selector: 'app-cartchiled',
  templateUrl: './cartchiled.component.html',
  styleUrls: ['./cartchiled.component.css']
})


export class CartchiledComponent implements OnInit ,OnChanges{
  prod!:proudact
  cartlist! : proudact[]
  constructor(private pro :ProductService ,private cart :CartService) {

  }
    
  
  
  ngOnChanges(changes: SimpleChanges): void {
    this.cartlist= this.cart.getcart()!
  }
  ngOnInit(): void {
    this.cart.getcart()
   this.cartlist= this.cart.listofcart!
   console.log(this.cart.listofcart)
  //  console.log(this.cart.getcart())
  //  console.log(this.prod)
  //  this.cartlist.push(this.prod)
  }
}
