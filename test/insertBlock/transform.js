import insertBlock from '../../src/blocks/insertBlock';

export default state => {
  const {document, selection} = state;
  const texts = document.getTexts();
  const first = texts.first();
  const range = selection.merge({
    anchorKey: first.key,
    anchorOffset: 0,
    focusKey: first.key,
    focusOffset: 1
  });

  const nextState = state
    .transform()
    .moveTo(range)
    .apply();

  return insertBlock(nextState, {
    type: 'customBlock',
    isVoid: true,
    data: {test: 'test'}
  });
};
