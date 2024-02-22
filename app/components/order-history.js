import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';

export default class OrderHistoryComponent extends Component {
  get incrementIndex() {
    return this.args.index + 1;
  }
}
