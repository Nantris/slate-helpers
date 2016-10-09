import links from '../../src/inlines/links';

export default state => {
  const {document, selection} = state;
  const texts = document.getTexts();
  const first = texts.first();
  const range = selection.merge({
    anchorKey: first.key,
    anchorOffset: 10,
    focusKey: first.key,
    focusOffset: 14
  });

  const nextState = state
    .transform()
    .moveTo(range)
    .apply();

  return links(nextState, 'link', {href: "http://test.com/"});
};
