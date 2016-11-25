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

const haveDataKeyEqualValueInSomeBlocks = (editorState, dataKey, value) => {
  if (editorState.blocks) {
    return editorState.blocks.some(block =>
      block.get('data').has(dataKey) &&
      block.get('data').get(dataKey) === value);
  }
};

const haveDataKeyInSomeBlocks = (editorState, dataKey) => {
  if (editorState.blocks) {
    return editorState.blocks.some(block =>
      block.get('data').has(dataKey) && block.get('data').get(dataKey));
  }
};

const haveDataKeyInSomeMarks = (editorState, dataKey) => {
  if (editorState.marks) {
    return editorState.marks.some(mark =>
      mark.get('data').has(dataKey) && mark.get('data').get(dataKey));
  }
};

export default {
  haveMarks,
  haveBlocks,
  haveInlines,
  haveDataKeyInSomeBlocks,
  haveDataKeyInSomeMarks,
  haveDataKeyEqualValueInSomeBlocks
};
