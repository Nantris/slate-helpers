export default (value, {type, isVoid}) => {
  value = value
    .transform()
    .insertBlock({type, isVoid, data: { }})
    .apply();
  return value;
};
