export const haveMarks = (editorState, type) => {
  if (editorState.marks) {
    return editorState.marks.some(mark => mark.type === type);
  }
};

export const haveBlocks = (change, type) => {
  const {value} = change;
  const blocks = value.document.getBlocks();
  if (blocks.size > 0) {
    return blocks.some(node =>
      node.type === type || node.type.indexOf(`${type}`) === 0);
  }
};

export const haveInlines = (editorState, type) => {
  if (editorState.inlines) {
    return editorState.inlines.some(inline => inline.type === type);
  }
};

export const haveDataKeyInSomeBlocks = (editorState, dataKey) => {
  if (editorState.blocks) {
    return editorState.blocks.some(block =>
      block.get('data').has(dataKey) && block.get('data').get(dataKey));
  }
};

export const haveDataKeyInSomeMarks = (editorState, dataKey) => {
  if (editorState.marks) {
    return editorState.marks.some(mark =>
      mark.get('data').has(dataKey) && mark.get('data').get(dataKey));
  }
};

export const haveDataKeyEqualValueInSomeBlocks = (editorState, dataKey, value) => {
  if (editorState.blocks) {
    return editorState.blocks.some(block =>
      block.get('data').has(dataKey) &&
      block.get('data').get(dataKey) === value);
  }
};
