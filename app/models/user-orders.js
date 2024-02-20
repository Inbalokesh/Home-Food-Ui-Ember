import Model, { attr } from '@ember-data/model';

export default class UserOrdersModel extends Model {
  @attr('string') order_status;
  @attr('string') address;
  @attr('number') quantity_ordered;
  @attr('date') delivery_time;
  @attr('number') product_id;
  @attr('number') user_id;
}
