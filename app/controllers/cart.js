import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';

export default class CartController extends Controller {
  @tracked selectedDeliveryTime = '-';
  @tracked addedQuantity = 1;

  handleChange(event) {
    this.selectedDeliveryTime = event.target.value;
  }

  addQuantity(event) {
    let addedQuantity = event.target.value;

    if (addedQuantity >= 1 && addedQuantity <= 10) {
      this.addedQuantity = addedQuantity;
    } else {
      window.alert('Select quantity between 1 and 10');
      console.log('Invalid input:', addedQuantity);
    }
  }

  resetTrackedProperty() {
    this.selectedDeliveryTime = '-';
    this.addedQuantity = 1;
  }
}
