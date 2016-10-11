export default state => {
  let newState = state
        .transform();

  // if type exist, remove same type mark
  if (state.marks) {
    state.marks.forEach(mark => {
      newState = newState.removeMark(mark);
    });
  }

  return newState.apply();
};
