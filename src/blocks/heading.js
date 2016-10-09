import {hasBlocks} from '../utils/has';

export default (state, {type, typeDefault = 'paragraph'}) => {
  const isActive = hasBlocks(state, type);

  state = state
    .transform()
    .setBlock(isActive ? typeDefault : type)
    .apply();
  return state;
};
