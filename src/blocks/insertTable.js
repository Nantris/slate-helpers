/* eslint-disable new-cap */
import EditTable from 'slate-edit-table';

// NOTE: Not refactor yet!
export default state => {
  let newState = state
    .transform();

  return EditTable().transforms
    .insertTable(newState)
    .apply();
};
