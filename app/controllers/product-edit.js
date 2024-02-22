import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class ProductEditController extends Controller {
    @service router;

    @action
    async productUpdate(event) {
        event.preventDefault();

        const productId = event.target.elements.productId.value;
        const url = `http://localhost:3000/products/${productId}`;

      try {
        let response = await fetch(url, {
          method: 'PUT',
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
            cook_id: 2,
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
