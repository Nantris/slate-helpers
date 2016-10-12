import {Set} from 'immutable';

const whatMarkTypes = editorState => {
  if (editorState.marks) {
    return editorState.marks.map(mark => mark.type);
  }

  return new Set();
};

const whatBlockTypes = editorState => {
  if (editorState.blocks) {
    return editorState.blocks.map(block => block.type);
  }

  return new Set();
};

const whatInlineTypes = editorState => {
  if (editorState.inlines) {
    return editorState.inlines.map(block => block.type);
  }

  return new Set();
};

export default {whatMarkTypes, whatBlockTypes, whatInlineTypes};
