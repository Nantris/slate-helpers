/* eslint-disable new-cap */
import EditList from 'slate-edit-list';
import EditBlockquote from 'slate-edit-blockquote';
import EditTable from 'slate-edit-table';

const ListUtils = EditList().utils;
const BlockquoteUtils = EditBlockquote().utils;
const TableUtils = EditTable().utils;

const isList = (editorState, type) => {
  const current = ListUtils.getCurrentList(editorState);
  if (current) {
    return current.type === type;
  }

  return false;
};

const isBlockquote = editorState => {
  return BlockquoteUtils.isSelectionInBlockquote(editorState);
};

const isTable = editorState => {
  return TableUtils.isSelectionInTable(editorState);
};

export default {isList, isBlockquote, isTable};
