import {whatMarkTypes} from '../utils/what';
import {getMarks} from '../utils/get';

export default (state, options) => {
  const type = options.type;
  let newState = state
        .transform();

  // if type exist, remove same type mark
  if (whatMarkTypes(state).has(type)) {
    getMarks(state, type).forEach(mark => {
      newState = newState.removeMark(mark);
    });
  }

  newState = newState
        .addMark(options)
        .apply();

  return newState;
};
