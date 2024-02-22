import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class ProductCreateController extends Controller {
  @service router;

  @action
  async productCreate(event) {
    event.preventDefault();
    try {
      let response = await fetch('http://localhost:3000/products', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          image: this.image,
          name: this.name,
          food_type: this.type,
          price: this.price,
          stock: this.stock,
          quantity: this.quantity,
          quantity_type: this.quantityType,
          cook_id: this.cook,
        }),
      });

      if (response.ok) {
        this.router.transitionTo('products');
      } else {
        console.log('Invalid');
      }
    } catch (error) {
      console.log(error);
    }
  }
}
