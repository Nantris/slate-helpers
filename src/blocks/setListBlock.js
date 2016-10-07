/* eslint-disable new-cap */
import EditList from 'slate-edit-list';
import {isList} from '../utils/is';

export default (state, type) => {
  let newState = state
    .transform();
  const utils = EditList().utils;
  const transforms = EditList().transforms;

  if (utils.isSelectionInList(state) || isList(state)) {
    newState = transforms
      .unwrapList(newState, type === 'ol_list');

    if (utils.getCurrentList(state).get('type') !== type) {
      newState = transforms
        .wrapInList(newState, type === 'ol_list');
    }
  } else {
    newState = transforms
      .wrapInList(newState, type === 'ol_list');
  }

  newState = newState
    .apply();
  return newState;
};
