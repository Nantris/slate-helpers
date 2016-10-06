/* eslint-disable new-cap */
import EditList from 'slate-edit-list';
import {isList} from '../utils/is';

export default (value, type) => {
  let state = value
    .transform();
  const utils = EditList().utils;
  const transforms = EditList().transforms;

  if (utils.isSelectionInList(value) || isList(value)) {
    state = transforms
      .unwrapList(state, type === 'ol_list');

    if (utils.getCurrentList(value).get('type') !== type) {
      state = transforms
        .wrapInList(state, type === 'ol_list');
    }
  } else {
    state = transforms
      .wrapInList(state, type === 'ol_list');
  }

  state = state
    .apply();
  return state;
};
