import expect from 'expect';
import fs from 'fs';
import path from 'path';
import Slate from 'slate';
import readMetadata from 'read-metadata';

function deserializeValue(json) {
  return Slate.Value.fromJSON(
      json,
      { normalize: false }
  );
}

describe('slate-plugins test', () => {
  const tests = fs.readdirSync(__dirname);

  tests.forEach(test => {
    if (test[0] === '.' || path.extname(test).length > 0) {
      return;
    }

    it(test, () => {
      const dir = path.resolve(__dirname, test);

      const inputPath = path.resolve(dir, 'input.yaml');
      const input = readMetadata.sync(inputPath);

      const expectedPath = path.resolve(dir, 'expected.yaml');
      let expected;
      if (fs.existsSync(expectedPath)) {
        expected = readMetadata.sync(expectedPath);
      }

      const runTransform = require(path.resolve(dir, 'transform.js')).default;
      const valueInput = deserializeValue(input);
      const newChange = runTransform(valueInput.change());

      if (expected) {
        const newDocJSon = newChange.value.toJSON();
        expect(newDocJSon).toEqual(deserializeValue(expected).toJSON());
      }
    });
  });
});
