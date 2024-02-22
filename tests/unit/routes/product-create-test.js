import { module, test } from 'qunit';
import { setupTest } from 'home-food-ui/tests/helpers';

module('Unit | Route | product-create', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:product-create');
    assert.ok(route);
  });
});
