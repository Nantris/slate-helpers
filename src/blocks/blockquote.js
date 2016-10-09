/* eslint-disable new-cap */
import EditBlockquote from 'slate-edit-blockquote';

export default (state, opt = {
  type: 'blockquote',
  typeDefault: 'paragraph'
}) => {
  let newState = state
    .transform();

  const utils = EditBlockquote(opt).utils;
  const transforms = EditBlockquote(opt).transforms;

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
