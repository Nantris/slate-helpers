/* eslint-disable new-cap */
import EditList from 'slate-edit-list';
import {isList} from '../utils/is';

export default (state, opt = {
  typeUL: 'list-ul',
  typeOL: 'list-ol',
  typeItem: 'list-item',
  typeDefault: 'paragraph',
  ordered: true
}) => {
  let newState = state
    .transform();
  const EL = EditList(opt);

  const utils = EL.utils;
  const transforms = EL.transforms;
  const ordered = opt.ordered || false;
  const typeOL = opt.typeOL || 'list-ol';
  const typeUL = opt.typeUL || 'list-ul';

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
