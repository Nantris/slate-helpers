const whatMarks = editorState => {
  if (editorState.marks) {
    return editorState.marks.map(mark => mark);
  }

  return null;
};

const whatMarkTypes = editorState => {
  if (editorState.marks) {
    return editorState.marks.map(mark => mark.type);
  }

  return null;
};

// const hasBlocks = (editorState, type) => {
//   if (editorState.blocks) {
//     return editorState.blocks.some(node =>
//       node.type === type || node.type.indexOf(`${type}`) === 0);
//   }
// };
// const hasInlines = (editorState, type) => {
//   if (editorState.inlines) {
//     return editorState.inlines.some(inline => inline.type === type);
//   }
// };

export default {whatMarks, whatMarkTypes};
