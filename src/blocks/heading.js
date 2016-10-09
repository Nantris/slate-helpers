import {hasBlocks} from '../utils/has';

export default (state, opt = {type: 'heading', typeDefault: 'paragraph'}) => {
  const isActive = hasBlocks(state, opt.type);

  state = state
    .transform()
    .setBlock(isActive ? opt.typeDefault || 'paragraph' : opt.type)
    .apply();
  return state;
};
