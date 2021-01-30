import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../cart.service';
import { products } from '../products'

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  product;
  constructor(
    private route: ActivatedRoute,
    private cartService : CartService,
  ) { }

  ngOnInit() {
    const routerParams =  this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routerParams.get('productID'));
    this.product = products.find(product => product.id === productIdFromRoute);
  }

  addToCart(product){
    this.cartService.addToCart(product);
    window.alert('Your product has been added to the cart');
  }

}