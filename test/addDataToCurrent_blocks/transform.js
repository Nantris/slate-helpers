import addDataToCurrent from '../../src/blocks/addDataToCurrent';
import {Range} from 'slate';

export default change => {
  const {value} = change;
  const {document, selection} = value;
  const first = document.getFirstText();
  const range = Range.create({
    anchorKey: first.key,
    anchorOffset: 0,
    focusKey: first.key,
    focusOffset: 5
  });

  const currentFrag = document.getFragmentAtRange(range);

  const nextValue = selection
    .moveToRangeOf(currentFrag);

  return addDataToCurrent(nextValue.change(), {data: {foo: 'bar'}});
};
