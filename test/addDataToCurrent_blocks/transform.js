import addDataToCurrent from '../../src/blocks/addDataToCurrent';

export default state => {
  const {document, selection} = state;
  const texts = document.getTexts();
  const first = texts.first();
  const range = selection.merge({
    anchorKey: first.key,
    anchorOffset: 0,
    focusKey: first.key,
    focusOffset: 5
  });

  const nextState = state
    .transform()
    .moveTo(range)
    .apply();

  return addDataToCurrent(nextState, {data: {foo: 'bar'}});
};
