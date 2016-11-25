/**
 * this update current type with additional data, this could be useful in align...
**/
import {Map} from 'immutable';

export default (state, {data}) => {
  let newState = state.transform();

  // if have blocks
  if (state.blocks) {
    state.blocks.forEach(type => {
      const mapData = Map(data);
      let typeOriginalData = type.get('data') || Map({});
      let newData;

      mapData.forEach((value, key) => {
        newData = typeOriginalData.set(key, value);
      });

      const newType = type.set('data', newData);
      // reset current type with new data
      newState.setBlock(newType);
    });
  }

  return newState.apply();
};
