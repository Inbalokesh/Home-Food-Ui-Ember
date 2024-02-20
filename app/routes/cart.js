import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class CartRoute extends Route {
  @service store;

  model(params) {
    const { item_id } = params;
    return this.store.peekRecord('products', item_id);
  }

  deactivate() {
    this.controller.resetTrackedProperty();
  }
}
