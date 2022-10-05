import { Component, OnInit } from '@angular/core';
import { proudact } from '../model/product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent{
  prodct:proudact[]=[
    {"id":0 , "name":"Head Phone","quantity":10 , "price":25 , "img":"https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MX472_AV4?wid=2000&hei=2000&fmt=jpeg&qlt=95&.v=1570119352353"},
    {"id":1 , "name":"Camera","quantity":5 , "price":50 , "img":"https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?cs=srgb&dl=pexels-math-90946.jpg&fm=jpg"},
    {"id":2 , "name":"iphon 12 pro","quantity":8 , "price":300 , "img":"https://media.4rgos.it/i/Argos/9520608_R_Z001A?w=750&h=440&qlt=70"},
    {"id":3 , "name":"Galaxy z flip 3","quantity":2 , "price":1000 , "img":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJCwkAJc-7-OebegSEHyL4-VqLlw0MZnrN_w&usqp=CAU"},
  ]
}
