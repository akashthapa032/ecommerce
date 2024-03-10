import EmberRouter from '@ember/routing/router';
import config from 'ecommerce/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('carts', { paht: 'shopping-cart' });
  this.route('item', { path: 'item/:item_id' });
});
