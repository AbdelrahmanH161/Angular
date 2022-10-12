import { Injectable } from '@angular/core';
import { proudact } from '../model/product';
import { ProductService } from './product.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  listofcart:proudact[]
  constructor(private pro :ProductService) {
    this.listofcart=[]
  }
getcart(){
  this.pro.selectedProduct.subscribe((res)=>{
    console.log(res) 
    this.listofcart=res
    return res
  })
}

}
