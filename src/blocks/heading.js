import {hasBlocks} from '../utils/has';

export default (state, type) => {
  const isActive = hasBlocks(state, type);

  state = state
    .transform()
    .setBlock(isActive ? 'paragraph' : type)
    .apply();
  return state;
};
