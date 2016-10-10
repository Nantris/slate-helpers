/* eslint-disable new-cap */
import EditList from 'slate-edit-list';
import EditBlockquote from 'slate-edit-blockquote';
import EditTable from 'slate-edit-table';

const isList = (editorState, type, opt) => {
  const ListUtils = EditList(opt).utils;
  const current = ListUtils.getCurrentList(editorState);
  if (current) {
    return current.type === type;
  }

  return false;
};

const isBlockquote = (editorState, opt) => {
  const BlockquoteUtils = EditBlockquote(opt).utils;
  return BlockquoteUtils.isSelectionInBlockquote(editorState);
};

const isTable = (editorState, opt) => {
  const TableUtils = EditTable(opt).utils;
  return TableUtils.isSelectionInTable(editorState);
};

export default {isList, isBlockquote, isTable};
