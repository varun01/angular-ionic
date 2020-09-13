import { Component, OnInit } from '@angular/core';
import { products } from '../product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  products;
  
  constructor() { 
    this.products = products;
  }

  ngOnInit() {
  }

  share(){
    alert('This product will be shared');
  }
}
