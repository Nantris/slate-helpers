export default (state, {type, isVoid = false, data = {}}) => {
  state = state
    .transform()
    .insertBlock({type, isVoid, data})
    .apply();
  return state;
};
