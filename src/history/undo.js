export default state => {
  state = state
        .transform()
        .undo()
        .apply({save: false});

  return state;
};
