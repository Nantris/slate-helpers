/* eslint-disable new-cap */
import EditTable from 'slate-edit-table';

export default value => {
  let state = value
    .transform();

  return EditTable().transforms
    .insertTable(state)
    .apply();
};
