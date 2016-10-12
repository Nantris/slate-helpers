const getMarkType = (editorState, type) => {
  if (editorState.marks) {
    return editorState.marks.filter(mark => mark.type === type);
  }
};

const getBlockType = (editorState, type) => {
  if (editorState.blocks) {
    return editorState.blocks.filter(block => block.type === type);
  }
};

export default {getMarkType, getBlockType};
