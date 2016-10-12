const haveMarks = (editorState, type) => {
  if (editorState.marks) {
    return editorState.marks.some(mark => mark.type === type);
  }
};

const haveBlocks = (editorState, type) => {
  if (editorState.blocks) {
    return editorState.blocks.some(node =>
      node.type === type || node.type.indexOf(`${type}`) === 0);
  }
};

const haveInlines = (editorState, type) => {
  if (editorState.inlines) {
    return editorState.inlines.some(inline => inline.type === type);
  }
};

const haveDataKeyInSomeBlocks = (editorState, dataKey) => {
  if (editorState.blocks) {
    editorState.blocks.some(block => block.get('data').has(dataKey));
  }
};

const haveDataKeyInSomeMarks = (editorState, dataKey) => {
  if (editorState.marks) {
    editorState.marks.some(mark => mark.get('data').has(dataKey));
  }
};

export default {
  haveMarks,
  haveBlocks,
  haveInlines,
  haveDataKeyInSomeBlocks,
  haveDataKeyInSomeMarks
};
