# Kolora

Colora is a lightweight, dependency-free library for color conversion between various formats such as RGBA, HEX, HSL. Ideal for developers, designers, and color enthusiasts looking to effortlessly translate color codes across different color spaces.

### Usage

```js
import { toHex } from 'colora';

const rgba = [255, 100, 100, 0.5];
const hex = toHex(rgba); // Returns '#ff646480'
```

```js
import { hexToHsl } from 'colora';

const hex = '#ff6464';
const hsl = hexToHsl(hex); // Returns [0, 100, 70]
```

### Supported Conversions

RGBA to HEX
HEX to RGBA
HEX to HSL
