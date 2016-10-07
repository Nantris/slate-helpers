export default (state, type) => {
  state = state
        .transform()
        .toggleMark(type)
        .apply();

  return state;
};
