import { helper } from '@ember/component/helper';

function incrementIndex(params) {
  // params[0] is the value passed to the helper
  // In this case, it will be the index
  return params[0] + 1;
}

export default helper(incrementIndex);