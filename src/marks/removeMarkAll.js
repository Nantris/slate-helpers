export default state => {
  let newState = state
        .transform();

  if (state.marks) {
    // remove all marks
    state.marks.forEach(mark => {
      newState = newState.removeMark(mark);
    });
  }

  return newState.apply();
};
