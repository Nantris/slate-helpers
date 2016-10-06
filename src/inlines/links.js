/* eslint-disable no-alert */
import {hasInlines} from '../utils/has';

export default (value, displayName) => {
  let hasLinks = hasInlines(value, displayName);

  if (hasLinks) {
    value = value
      .transform()
      .unwrapInline('link')
      .apply();
  } else if (value.isExpanded) {
    const href = window.prompt('Enter the URL of the link:');
    value = value
      .transform()
      .wrapInline({
        type: 'link',
        data: {href}
      })
      .collapseToEnd()
      .apply();
  } else {
    const href = window.prompt('Enter the URL of the link:');
    const text = window.prompt('Enter the text for the link:');
    value = value
      .transform()
      .insertText(text)
      .extendBackward(text.length)
      .wrapInline({
        type: 'link',
        data: {href}
      })
      .collapseToEnd()
      .apply();
  }

  return value;
};
