import {whatMarkTypes} from '../utils/what';
import {getMarkType} from '../utils/get';

export default (state, type) => {
  let newState = state
        .transform();
  // if type exist, remove same type mark
  if (whatMarkTypes(state).have(type)) {
    getMarkType(state, type).forEach(mark => {
      newState = newState.removeMark(mark);
    });
  }

  return newState.apply();
};
