import EmberRouter from '@ember/routing/router';
import config from 'home-food-ui/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('signin');
  this.route('menu');
  this.route('cart', { path: 'cart/:item_id' });
  this.route('profile');

  this.route('order', function () {
    this.route('item', { path: '/item/:item_id' });
  });
  this.route('error', { path: '/*path' });
  this.route('signup', { path: 'create/new' });
  this.route('users');
  this.route('home');
  this.route('products');
  this.route('product-create', { path: 'product/create/new' });
  this.route('product-edit', { path: 'product/edit/:product_id' });
});
