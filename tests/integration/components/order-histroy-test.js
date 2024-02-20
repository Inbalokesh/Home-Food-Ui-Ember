import { module, test } from 'qunit';
import { setupRenderingTest } from 'home-food-ui/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | order-histroy', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<OrderHistroy />`);

    assert.dom().hasText('');

    // Template block usage:
    await render(hbs`
      <OrderHistroy>
        template block text
      </OrderHistroy>
    `);

    assert.dom().hasText('template block text');
  });
});
