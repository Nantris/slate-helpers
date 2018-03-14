/* eslint-disable no-alert */
import {haveInlines} from '@canner/slate-util-have';
import {assign} from 'lodash';

const DEFAULT = {
  href: "http://example.com/",
  text: "example link"
};

export default (change, type, opt = DEFAULT) => {
  const {text, href} = assign({}, DEFAULT, opt);
  let haveLinks = haveInlines(change, type);

  if (haveLinks) {
    change.unwrapInline(type);
  } else if (change.value.isExpanded) {
    change
      .wrapInline({
        type,
        data: {href}
      })
      .collapseToEnd();
  } else {
    change
      .insertText(text)
      .extend(0 - text.length)
      .wrapInline({
        type: type,
        data: {href: href}
      })
      .collapseToEnd();
  }

  return change;
};
