import { module, test } from 'qunit';

import { setupTest } from 'home-food-ui/tests/helpers';

module('Unit | Model | orders', function (hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function (assert) {
    let store = this.owner.lookup('service:store');
    let model = store.createRecord('orders', {});
    assert.ok(model);
  });
});
