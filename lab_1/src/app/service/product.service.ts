import { isNgTemplate } from '@angular/compiler';
import { Injectable } from '@angular/core';

import { proudact} from '../model/product';

@Injectable({
  providedIn:"root"
})
export class ProductService {
  prodct:proudact[];
constructor() {
  this.prodct = [
    { id: 100, name: 'LenovoThinkpad laptop', price: 100000000, quantity: 1, img: 'https://sigma-computer.com/image/products/15748547101571562441web-template.png', categoryId: 1 },
    { id: 200, name: 'Apple MacBook laptop', price: 2007780, quantity: 0, img: 'https://support.apple.com/library/content/dam/edam/applecare/images/en_US/imac/imac-27-2020.jpg', categoryId: 1 },
    { id: 300, name: 'Lenovo Tab 2', price: 3000, quantity: 10, img: 'https://i.pcmag.com/imagery/reviews/03xppih5CS4H3IWWF9fXOqw-1..v1574212822.jpg', categoryId: 2 },
    { id: 400, name: 'Samsung Tab', price: 40.5, quantity: 2, img: 'https://i.pcmag.com/imagery/reviews/03xppih5CS4H3IWWF9fXOqw-1..v1574212822.jpg', categoryId: 2 },
    { id: 500, name: 'Smasung Note 10', price: 50000, quantity: 0, img: 'https://cdn.shortpixel.ai/spai/w_427+q_glossy+ret_img+to_webp/https://mobizil.com/wp-content/uploads/2022/08/Samsung-Galaxy-Z-Fold-4-400x400.jpg', categoryId: 3 },
    { id: 600, name: 'Samsung S22 Utlra', price: 600, quantity: 1, img: 'https://images.samsung.com/is/image/samsung/eg/galaxy-note20/gallery/eg-galaxy-note20-ultra-n985-sm-n985fzngegy-frontmysticbronze-thumb-274061153?$320_320_PNG$', categoryId: 3 },
    { id: 700, name: 'apple S22 Utlra', price: 500, quantity: 4, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSu2247NkialOzGtDxhG4_7wu77l9Wno9FwWQ&usqp=CAU', categoryId: 4 },
    { id: 800, name: 'tochiba Utlra', price: 60000, quantity: 14, img: 'https://sigma-computer.com/image/products/15748547101571562441web-template.png', categoryId: 4 },
    { id: 900, name: 'ththt Utlra', price: 60, quantity: 0, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSu2247NkialOzGtDxhG4_7wu77l9Wno9FwWQ&usqp=CAU', categoryId: 4 },]
}

getAll() : proudact[]{
  return this.prodct
}

filtterByCategoryId(id :number){
  if(id==0)
  return this.prodct;
  return this.prodct.filter(item=> item.categoryId ==id);
}


}


