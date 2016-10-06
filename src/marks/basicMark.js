export default (value, displayName) => {
  value = value
        .transform()
        .toggleMark(displayName)
        .apply();

  return value;
};
