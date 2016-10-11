export default state => {
  state = state
        .transform()
        .undo()
        .apply();

  return state;
};
