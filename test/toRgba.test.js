import { should } from 'micro-should';
import { toRgba } from '../api/toRgba.js';
import assert from 'assert';

should('convert HEX to RGBA correctly', () => {
  const hex = '#ff646480';
  const expectedRgba = [100, 100, 128, 0.5019607843137255];
  assert.deepStrictEqual(toRgba(hex), expectedRgba);
});
