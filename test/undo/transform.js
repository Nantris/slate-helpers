import insertBlock from '../../src/blocks/insertBlock';
import undo from '../../src/history/undo';

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

  let nextState = state
    .transform()
    .moveTo(range)
    .apply();

  nextState = insertBlock(nextState, {
    type: 'customBlock',
    isVoid: true,
    data: {test: 'test'}
  });

  return undo(nextState);
};
