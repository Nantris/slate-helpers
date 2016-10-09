/* eslint-disable no-alert */
import {hasInlines} from '../utils/has';

export default (state, type, opt = {href: "http://example.com/", text: "example link"}) => {
  let hasLinks = hasInlines(state, type);
  const text = opt.text || "link exmple";
  const href = opt.href || "http://example.com/";

  if (hasLinks) {
    state = state
      .transform()
      .unwrapInline(type)
      .apply();
  } else if (state.isExpanded) {
    state = state
      .transform()
      .unwrapInline(type)
      .wrapInline({
        type: type,
        data: {href: href}
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
