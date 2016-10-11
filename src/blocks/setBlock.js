export default (state, options) => {
  state = state
    .transform()
    .setBlock(options)
    .apply();
  return state;
};
