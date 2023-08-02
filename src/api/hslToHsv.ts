import { HSL, HSV } from 'types.js';

export function hslToHsv(hsl: HSL): HSV {
  const { h, s, l } = hsl;
  let sNorm = s / 100;
  let lNorm = l / 100;

  let newS;
  let v;

  if (lNorm < 0.5) {
    v = lNorm * (1.0 + sNorm);
  } else {
    v = lNorm + sNorm - sNorm * lNorm;
  }

  if (v === 0) {
    return { h: 0, s: 0, v: 0 };
  }

  let newL = 2 * lNorm - v;
  newS = (v - newL) / v;

  return { h, s: newS * 100, v: v * 100 };
}
