import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class ProfileRoute extends Route {
  @service session;
  @service store;

  async model() {
    let userId = this.session.get('userId');

    let user = await this.store.findRecord('users', userId);
    let orders = await this.store.query('orders', {
      filter: {
        user_id: userId,
      },
    });

    console.log(orders);

    let products = await this.store.findAll('products');

    console.log(products);

    let filteredProducts = [];

    orders.forEach((order) => {
      let matchingProducts = products.filter(
        (product) => product.id == order.product_id,
      );
      filteredProducts.push(...matchingProducts);
    });

    console.log(filteredProducts);

    return { user, orders, filteredProducts };
  }
}
