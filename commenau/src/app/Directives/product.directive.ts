import { Directive, Input } from '@angular/core';
import { Product } from '../model/product';
import { ProductsService } from '../Services/products.service';

@Directive({
  selector: '[appProduct]',
})
export class ProductDirective {
  constructor() {}
  public ngOnInit(): void {}
}
