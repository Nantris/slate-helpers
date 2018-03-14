import {Set} from 'immutable';

export const whatMarkTypes = ({value}) => {
  if (value.marks) {
    return value.marks.map(mark => mark.type);
  }

  return new Set();
};

export const whatBlockTypes = ({value}) => {
  if (value.blocks) {
    return value.blocks.map(block => block.type);
  }

  return new Set();
};

export const whatInlineTypes = ({value}) => {
  if (value.inlines) {
    return value.inlines.map(block => block.type);
  }

  return new Set();
};

