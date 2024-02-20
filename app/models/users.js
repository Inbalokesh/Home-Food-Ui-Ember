import Model, { attr } from '@ember-data/model';

export default class UsersModel extends Model {
  @attr('string') name;
  @attr('string') email;
  @attr('number') mobile_number;
}
