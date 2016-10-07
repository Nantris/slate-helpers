export default (state, {type, isVoid}) => {
  state = state
    .transform()
    .insertBlock({type, isVoid, data: { }})
    .apply();
  return state;
};
