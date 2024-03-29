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

    let products = await this.store.findAll('products');

    let filteredProducts = [];

    orders.forEach((order) => {
      let matchingProducts = products.filter(
        (product) => product.id == order.product_id,
      );
      filteredProducts.push(...matchingProducts);
    });

    // let filteredProducts = orders.flatMap(order => {
    //   let matchingProducts = products.filter(product => product.id == order.product_id);
    //   return matchingProducts.map(product => ({ ...product, product_id: product.id }));
    // });

    // console.log(filteredProducts)

    return { user, orders, filteredProducts };
  }
}
