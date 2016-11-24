import links from '../../src/inlines/links';

export default state => {
  const {document, selection} = state;
  const texts = document.getTexts();
  const second = texts.get(1);
  const range = selection.merge({
    anchorKey: second.key,
    anchorOffset: 4,
    focusKey: second.key,
    focusOffset: 8
  });

  const nextState = state
    .transform()
    .moveTo(range)
    .apply();

  return links(nextState, 'link', {href: "http://test.com/"});
};
