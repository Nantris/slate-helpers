/* eslint-disable new-cap */
import EditBlockquote from 'slate-edit-blockquote';
import {assign} from 'lodash';

const DEFAULT = {
  type: 'blockquote',
  typeDefault: 'paragraph'
};

export default (state, opt = DEFAULT) => {
  const options = assign({}, DEFAULT, opt);
  let newState = state
    .transform();

  const utils = EditBlockquote(options).utils;
  const transforms = EditBlockquote(options).transforms;

  if (utils.isSelectionInBlockquote(state)) {
    newState = transforms
      .unwrapBlockquote(newState);
  } else {
    newState = transforms
      .wrapInBlockquote(newState);
  }

  newState = newState
    .apply();
  return newState;
};
