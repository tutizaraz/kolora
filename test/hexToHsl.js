import { should } from 'micro-should';
import { hexToHsl } from '../api/hexToHsl.js';
import assert from 'assert';

should('convert HEX to HSL correctly', () => {
  const hex = '#ff6464';
  const expectedHsl = [0, 100, 70];
  assert.deepStrictEqual(hexToHsl(hex), expectedHsl);
});
