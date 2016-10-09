/* eslint-disable new-cap */
import EditList from 'slate-edit-list';
import {isList} from '../utils/is';
import {assign} from 'lodash';

const DEFAULT = {
  typeUL: 'list-ul',
  typeOL: 'list-ol',
  typeItem: 'list-item',
  typeDefault: 'paragraph',
  ordered: true
};

export default (state, opt = DEFAULT) => {
  const options = assign({}, DEFAULT, opt);
  let newState = state
    .transform();

  const {typeUL, typeOL, ordered} = options;
  const EL = EditList(options);

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
