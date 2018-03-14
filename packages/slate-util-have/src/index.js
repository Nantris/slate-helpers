export const haveMarks = ({value}, type) => {
  if (value.marks.size > 0) {
    return value.marks.some(mark => mark.type === type);
  }
};

export const haveBlocks = ({value}, type) => {
  if (value.blocks.size > 0) {
    return value.blocks.some(node =>
      node.type === type || node.type.indexOf(`${type}`) === 0);
  }
};

export const haveInlines = ({value}, type) => {
  if (value.inlines.size > 0) {
    return value.inlines.some(inline => inline.type === type);
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
