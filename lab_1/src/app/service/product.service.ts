import { HttpClient } from '@angular/common/http';
import { isNgTemplate } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

import { proudact} from '../model/product';

@Injectable({
  providedIn:"root"
})
export class ProductService {
  prodct:proudact[]=[];
  pro!:proudact
  private product = new BehaviorSubject<proudact[]>(this.prodct);
  selectedProduct= this.product.asObservable();
constructor(private http: HttpClient) {

}

getAll(){
  return this.http.get<proudact[]>('https://fakestoreapi.com/products')
}

filtterByCategoryId(Id :number){
  if(Id==0)
  return this.prodct;
  return this.prodct.filter(item=> item.id ==Id);
}
findprodct(idp :number){
return this.prodct
}
async addcart(pro:proudact){
this.prodct.push(pro)
  await this.product.next(this.prodct);
}

}


