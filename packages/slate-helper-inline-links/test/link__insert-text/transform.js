import links from '../../src/inlines/links';

export default state => {
  const nextState = state
    .transform()
    .moveForward(2)
    .focus()
    .apply();

  return links(nextState, 'link');
};
