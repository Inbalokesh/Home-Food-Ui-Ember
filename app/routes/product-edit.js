import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class ProductEditRoute extends Route {
  @service store;

  model(params) {
    const { product_id } = params;
    return this.store.peekRecord('products', product_id);
  }
}
