/* eslint-disable no-alert */
import {haveInlines} from '../utils/have';
import {assign} from 'lodash';

const DEFAULT = {
  href: "http://example.com/",
  text: "example link"
};

export default (state, type, opt = DEFAULT) => {
  const {text, href} = assign({}, DEFAULT, opt);
  let haveLinks = haveInlines(state, type);

  if (haveLinks) {
    state = state
      .transform()
      .unwrapInline(type)
      .apply();
  } else if (state.isExpanded) {
    state = state
      .transform()
      .wrapInline({
        type,
        data: {href}
      })
      .collapseToEnd()
      .apply();
  } else {
    state = state
      .transform()
      .insertText(text)
      .extendBackward(text.length)
      .wrapInline({
        type: type,
        data: {href: href}
      })
      .collapseToEnd()
      .apply();
  }

  return state;
};
