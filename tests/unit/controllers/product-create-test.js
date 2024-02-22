import { module, test } from 'qunit';
import { setupTest } from 'home-food-ui/tests/helpers';

module('Unit | Controller | product-create', function (hooks) {
  setupTest(hooks);

  // TODO: Replace this with your real tests.
  test('it exists', function (assert) {
    let controller = this.owner.lookup('controller:product-create');
    assert.ok(controller);
  });
});
