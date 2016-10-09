/* eslint-disable new-cap */
import EditBlockquote from 'slate-edit-blockquote';

export default (state, {type, typeDefault = 'paragraph'}) => {
  let newState = state
    .transform();
  const utils = EditBlockquote({type, typeDefault}).utils;
  const transforms = EditBlockquote({type, typeDefault}).transforms;

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
