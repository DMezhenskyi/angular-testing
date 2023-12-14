import { Pipe, PipeTransform } from '@angular/core';
import { toNumberProperty } from '../../utils/type-coercion';

@Pipe({
  name: 'productUrl',
  standalone: true,
})
export class ProductUrlPipe implements PipeTransform {
  private baseUrl: string = 'https://test.com';

  transform(productId: string | number): string {
    const id = toNumberProperty(productId);
    if (!this.baseUrl) {
      throw new Error(`Base URL was not provided...`);
    }
    if (!id) {
      throw new Error(`Invalid product id... Provided: '${productId}'`);
    }
    return `${this.baseUrl}/product/${id}`;
  }
}
