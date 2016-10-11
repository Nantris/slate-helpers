export default (state, options) => {
  state = state
        .transform()
        .toggleMark(options)
        .apply();

  return state;
};
