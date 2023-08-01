import { should } from 'micro-should';
import { toHex } from '../api/toHex.js';
import assert from 'assert';

should('convert RGBA to HEX correctly', () => {
  const rgba = [255, 100, 100, 0.5];
  const expectedHex = '#ff646480';
  assert.equal(toHex(rgba), expectedHex);
});
