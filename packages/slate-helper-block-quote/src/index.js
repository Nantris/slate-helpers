/* eslint-disable new-cap */
import EditBlockquote from 'slate-edit-blockquote';
import {assign} from 'lodash';

const DEFAULT = {
  type: 'blockquote',
  typeDefault: 'paragraph'
};

export default (change, opt = DEFAULT) => {
  const options = assign({}, DEFAULT, opt);
  let newChange;

  const utils = EditBlockquote(options).utils;
  const changes = EditBlockquote(options).changes;

  if (utils.isSelectionInBlockquote(change.value)) {
    newChange = changes
      .unwrapBlockquote(change);
  } else {
    newChange = changes
      .wrapInBlockquote(change);
  }

  return newChange;
};
