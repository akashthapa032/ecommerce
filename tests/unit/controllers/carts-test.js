import { module, test } from 'qunit';
import { setupTest } from 'ecommerce/tests/helpers';

module('Unit | Controller | carts', function (hooks) {
  setupTest(hooks);

  // TODO: Replace this with your real tests.
  test('it exists', function (assert) {
    let controller = this.owner.lookup('controller:carts');
    assert.ok(controller);
  });
});
