/**
 * this delete a data key in current block type
 *
 * @param {Slate.state} state
 * @param {Datakey} key
 * @return {Slate.state}
**/
export default (state, key) => {
  let newState = state.transform();

  // if have blocks
  if (state.blocks) {
    state.blocks.forEach(type => {
      const typeOriginalData = type.get('data');
      const newData = typeOriginalData.delete(key);

      const newType = type.set('data', newData);
      // reset current type with new data
      newState.setBlock(newType);
    });
  }

  return newState.apply();
};
