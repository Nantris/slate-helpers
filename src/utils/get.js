const getMarks = (editorState, type) => {
  if (editorState.marks) {
    return editorState.marks.filter(mark => mark.type === type);
  }
};

export default {getMarks};
