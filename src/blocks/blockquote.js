/* eslint-disable new-cap */
import EditBlockquote from 'slate-edit-blockquote';

export default value => {
  let state = value
    .transform();
  const utils = EditBlockquote().utils;
  const transforms = EditBlockquote().transforms;

  if (utils.isSelectionInBlockquote(value)) {
    state = transforms
      .unwrapBlockquote(state);
  } else {
    state = transforms
      .wrapInBlockquote(state);
  }

  state = state
    .apply();
  return state;
};
