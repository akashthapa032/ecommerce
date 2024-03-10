import { module, test } from 'qunit';
import { setupTest } from 'ecommerce/tests/helpers';

module('Unit | Route | carts', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:carts');
    assert.ok(route);
  });
});
