import { Rgba } from '../types.js';

export function toRgba(hex: string): Rgba {
  const value = parseInt(hex.slice(1), 16);
  const r = (value >> 16) & 255;
  const g = (value >> 8) & 255;
  const b = value & 255;
  const a = hex.length === 9 ? parseInt(hex.slice(7), 16) / 255 : 1;
  return [r, g, b, a];
}
