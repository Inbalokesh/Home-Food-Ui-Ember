import Component from '@glimmer/component';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class DeleteProductComponent extends Component {
  @service store;
  @service router;

  @action
  async deleteProduct(productId) {
    console.log(productId);
    try {
      let products = await this.store.findRecord('products', productId, {
        backgroundReload: false,
      });
      await products.destroyRecord();
      this.router.transitionTo('products');
    } catch (error) {
      console.log(error);
    }
  }
}
