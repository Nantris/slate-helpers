/* eslint-disable no-alert */
import {hasInlines} from '../utils/has';

export default (state, type, opt = {href: "http://example.com/", text: "example link"}) => {
  let hasLinks = hasInlines(state, type);

  if (hasLinks) {
    state = state
      .transform()
      .unwrapInline(type)
      .apply();
  } else if (state.isExpanded) {
    // const href = window.prompt('Enter the URL of the link:');
    state = state
      .transform()
      .unwrapInline(type)
      .wrapInline({
        type: type,
        data: {href: opt.href}
      })
      .collapseToEnd()
      .apply();
  } else {
    // const href = window.prompt('Enter the URL of the link:');
    // const text = window.prompt('Enter the text for the link:');
    state = state
      .transform()
      .insertText(opt.text)
      .extendBackward(opt.text.length)
      .wrapInline({
        type: type,
        data: {href: opt.href}
      })
      .collapseToEnd()
      .apply();
  }

  return state;
};
