import {haveBlocks} from '@canner/slate-util-have';

const DEFAULT = {
  type: 'heading',
  typeDefault: 'paragraph'
};

export default (change, opt = DEFAULT) => {
  const {type, typeDefault} = Object.assign({}, DEFAULT, opt);
  const isActive = haveBlocks(change, type);

  return change.setBlocks(isActive ? typeDefault : type)
};
