import { module, test } from 'qunit';
import { setupRenderingTest } from 'home-food-ui/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module(
  'Integration | Component | order-history/product-name',
  function (hooks) {
    setupRenderingTest(hooks);

    test('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });

      await render(hbs`<OrderHistory::ProductName />`);

      assert.dom().hasText('');

      // Template block usage:
      await render(hbs`
      <OrderHistory::ProductName>
        template block text
      </OrderHistory::ProductName>
    `);

      assert.dom().hasText('template block text');
    });
  },
);
