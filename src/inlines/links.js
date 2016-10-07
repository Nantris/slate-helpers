/* eslint-disable no-alert */
import {hasInlines} from '../utils/has';

export default (state, type) => {
  let hasLinks = hasInlines(state, type);

  if (hasLinks) {
    state = state
      .transform()
      .unwrapInline(type)
      .apply();
  } else if (state.isExpanded) {
    const href = window.prompt('Enter the URL of the link:');
    state = state
      .transform()
      .wrapInline({
        type: type,
        data: {href}
      })
      .collapseToEnd()
      .apply();
  } else {
    const href = window.prompt('Enter the URL of the link:');
    const text = window.prompt('Enter the text for the link:');
    state = state
      .transform()
      .insertText(text)
      .extendBackward(text.length)
      .wrapInline({
        type: type,
        data: {href}
      })
      .collapseToEnd()
      .apply();
  }

  return state;
};
