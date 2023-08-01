import { Rgba } from '../types.js';

export function toHex(rgba: Rgba): string {
  const [r, g, b, a] = rgba;
  const alpha = Math.round(a * 255)
    .toString(16)
    .padStart(2, '0');
  return `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)}${alpha}`;
}
