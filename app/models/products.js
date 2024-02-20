import Model, { attr } from '@ember-data/model';

export default class ProductsModel extends Model {
  @attr('string') name;
  @attr('string') food_type;
  @attr('number') quantity;
  @attr('string') quantity_type;
  @attr('number') stock;
  @attr('number') price;
  @attr('number') cook_id;
  @attr('string') image;
}
