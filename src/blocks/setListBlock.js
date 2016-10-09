/* eslint-disable new-cap */
import EditList from 'slate-edit-list';
import {isList} from '../utils/is';

export default (state, {
  typeUL = 'list-ul',
  typeOL = 'list-ol',
  typeItem = 'list-item',
  typeDefault = 'paragraph',
  ordered
}) => {
  let newState = state
    .transform();
  const EL = EditList({typeUL, typeOL, typeItem, typeDefault});

  const utils = EL.utils;
  const transforms = EL.transforms;

  if (utils.isSelectionInList(state) || isList(state)) {
    newState = transforms
      .unwrapList(newState, ordered);

    if (utils.getCurrentList(state).get('type') !==
      (ordered ? typeOL : typeUL)) {
      newState = transforms
        .wrapInList(newState, ordered);
    }
  } else {
    newState = transforms
      .wrapInList(newState, ordered);
  }

  newState = newState
    .apply();
  return newState;
};
