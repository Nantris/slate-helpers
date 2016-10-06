const hasMarks = (editorState, type) => {
  if (editorState.marks) {
    return editorState.marks.some(mark => mark.type === type);
  }
};
const hasBlocks = (editorState, type) => {
  if (editorState.blocks) {
    return editorState.blocks.some(node =>
      node.type === type || node.type.indexOf(`${type}-`) === 0);
  }
};
const hasInlines = (editorState, type) => {
  if (editorState.inlines) {
    return editorState.inlines.some(inline => inline.type === type);
  }
};

export default {hasMarks, hasBlocks, hasInlines};
