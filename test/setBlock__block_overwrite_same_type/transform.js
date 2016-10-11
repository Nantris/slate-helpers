import setBlock from '../../src/blocks/setBlock';

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

  return setBlock(nextState, {type: 'testBlock', data: {}});
};
