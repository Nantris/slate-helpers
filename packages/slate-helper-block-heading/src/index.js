import {haveBlocks} from '@canner/slate-util-have';
import {assign} from 'lodash';

const DEFAULT = {
  type: 'heading',
  typeDefault: 'paragraph'
};

export default (change, opt = DEFAULT) => {
  const {type, typeDefault} = assign({}, DEFAULT, opt);
  const isActive = haveBlocks(change, type);

  return change.setBlocks(isActive ? typeDefault : type)
};
