const getMarks = (editorState, type) => {
  if (editorState.marks) {
    return editorState.marks.map(mark => {
      if (mark.type === type) {
        return mark;
      }

      return null;
    });
  }
};

export default {getMarks};
