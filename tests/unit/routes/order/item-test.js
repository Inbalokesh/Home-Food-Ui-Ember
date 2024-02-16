import { module, test } from 'qunit';
import { setupTest } from 'home-food-ui/tests/helpers';

module('Unit | Route | order/item', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:order/item');
    assert.ok(route);
  });
});
