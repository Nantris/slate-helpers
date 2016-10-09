import {hasBlocks} from '../utils/has';
import {assign} from 'lodash';

const DEFAULT = {
  type: 'heading',
  typeDefault: 'paragraph'
};

export default (state, opt = DEFAULT) => {
  const {type, typeDefault} = assign({}, DEFAULT, opt);
  const isActive = hasBlocks(state, type);

  state = state
    .transform()
    .setBlock(isActive ? typeDefault : type)
    .apply();
  return state;
};
