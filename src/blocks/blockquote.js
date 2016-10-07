/* eslint-disable new-cap */
import EditBlockquote from 'slate-edit-blockquote';

export default state => {
  let newState = state
    .transform();
  const utils = EditBlockquote().utils;
  const transforms = EditBlockquote().transforms;

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
