export default (state, options) => {
  state = state
    .transform()
    .insertBlock(options)
    .apply();
  return state;
};
