export default (state, options) => {
  state = state
    .transform()
    .insertInline(options)
    .apply();
  return state;
};
