import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../products';

@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css'],
})
export class ProductAlertsComponent implements OnInit {
  constructor() {}

  @Input()
  product: Product | undefined;
  @Output()
  notify = new EventEmitter();

  ngOnInit(): void {}
}

/*
1. @Component - component DECORATOR - indicates that the following class is a component. Also provides metadata about the component, including its selector, templates, and styles.
2. selector - identifies the component. By convention, Angular component selectors begin with the prefix app-, followed by the component name.
3. templateUrl & styleUrls - reference the component's HTML and CSS.
4. ProductAlertsComponent - CLASS DEFINITION - define a property named product with an @Input() decorator.
5. @Input() - IMPUT DECORATOR - indicates that the property value passes in from the component's parent, ProductListComponent.
6. OnInit - INTERFACE
7. ngOnInit() - METHOD
8. @Output() - OUTPUT DECORATOR
*/
