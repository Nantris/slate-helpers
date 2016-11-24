import links from '../../src/inlines/links';

export default state => {
  const {document, selection} = state;
  const texts = document.getTexts();
  const first = texts.get(1);
  const second = texts.get(2);
  const range = selection.merge({
    anchorKey: first.key,
    anchorOffset: 6,
    focusKey: second.key,
    focusOffset: 3
  });

  const nextState = state
    .transform()
    .moveTo(range)
    .apply();

  return links(nextState, 'link', {href: "http://test.com/"});
};
