import { Component } from '@angular/core';

import { products } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent {
  products = products;

  share() {
    window.alert('The product has been shared!');
  }
}

/*
1. @Component - component DECORATOR - indicates that the following class is a component. Also provides metadata about the component, including its selector, templates, and styles.

Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
