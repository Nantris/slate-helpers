import {hasBlocks} from '../utils/has';

export default (value, type) => {
  const isActive = hasBlocks(value, type);

  value = value
    .transform()
    .setBlock(isActive ? 'paragraph' : type)
    .apply();
  return value;
};
