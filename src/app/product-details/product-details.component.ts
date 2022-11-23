// handles the display of each product
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product, products } from '../products';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private cartServise: CartService
  ) {}

  product: Product | undefined;

  ngOnInit(): void {
    // First get the product id from the current route.
    const routePrams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routePrams.get('productId'));

    // Find the product that correspond with the id provided in route.
    this.product = products.find(
      (product) => product.id === productIdFromRoute
    );
  }

  // Adding item to a cart
  addToCart(product: Product) {
    this.cartServise.addToCart(product);
    window.alert('Your product has been added to the cart!');
  }
}

/*
1. product - PROP
2. ActivatedRoute - contains information about the route and the route's parameters. By injecting ActivatedRoute, you are configuring the component to use a service.
3. route.snapshot - which is the ActivatedRouteSnapshot that contains information about the active route at that particular moment in time.
4. productId - The URL that matches the route provides the productId . Angular uses the productId to display the details for each unique product.
*/
