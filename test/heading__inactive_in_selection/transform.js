import heading from '../../src/blocks/heading';

export default state => {
  const {document, selection} = state;
  const texts = document.getTexts();
  const first = texts.first();
  const range = selection.merge({
    anchorKey: first.key,
    anchorOffset: 4,
    focusKey: first.key,
    focusOffset: 7
  });

  const nextState = state
    .transform()
    .moveTo(range)
    .apply();

  return heading(nextState);
};
