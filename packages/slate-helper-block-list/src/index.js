/* eslint-disable new-cap */
import EditList from 'slate-edit-list';
import {assign} from 'lodash';

const DEFAULT = {
  types: ['list-ol', 'list-ul'],
  typeItem: 'list-item',
  typeDefault: 'paragraph',
  ordered: true
};

export default (change, opt = DEFAULT) => {
  const options = assign({}, DEFAULT, opt);
  const {types, ordered} = options;
  const {utils, changes} = EditList(options);
  const currentType = (ordered ? types[0] : types[1]);
  let newChange;

  if (utils.isSelectionInList(change.value)) {
    if (utils.getCurrentList(change.value).type !== currentType) {
      newChange = changes.wrapInList(change, currentType);
    } else {
      newChange = changes.unwrapList(change);
    }
  } else {
    newChange = changes
      .wrapInList(change, currentType);
  }

  return newChange;
};
