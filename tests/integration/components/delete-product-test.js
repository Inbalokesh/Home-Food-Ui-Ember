import { module, test } from 'qunit';
import { setupRenderingTest } from 'home-food-ui/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | delete-product', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<DeleteProduct />`);

    assert.dom().hasText('');

    // Template block usage:
    await render(hbs`
      <DeleteProduct>
        template block text
      </DeleteProduct>
    `);

    assert.dom().hasText('template block text');
  });
});
