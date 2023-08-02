import { should } from 'micro-should';
import { hslToHsv } from '../api/hslToHsv.js';
import assert from 'assert';

should('convert HSL to HSV correctly', () => {
  const hsl = { h: 360, s: 100, l: 50 };
  const expectedHsv = { h: 360, s: 100, v: 100 };
  assert.deepStrictEqual(hslToHsv(hsl), expectedHsv);
});
