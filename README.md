# Yet Another Fraction Library
![Tests](https://github.com/Susul-1312/yetanotherfractionlibrary/actions/workflows/test.yml/badge.svg) [![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)
This is a library for dealing with fractions directly instead of decimal numbers.

## Features
- [x] Fractions are represented as a string containing numerator and denominator.
- [x] Fractions can be simplified.
- [x] Fractions can be added, subtracted, multiplied, and divided.
- [ ] Fractions can be compared.
- [x] Fractions can be converted to decimal numbers.
- [x] Decimal numbers can be converted to fractions.

## Installation
yafl has no production dependencies.

To install yafl, run the following command:
```sh
npm install yafl
```

## Usage
Functions are represented as strings containing numerator and denominator.
```js
fraction = '1/2'
fraction2 = '1/3'
```

To reduce a fraction, use the `reduce` function.
```js
const { reduce } = require('yetanotherfractionlibrary')

fraction = '2/4'

reduced = reduce(fraction)
console.log(reduced) // 1/2

// Whole numbers are reduced to x/1
reduced = reduce('2')
console.log(reduced) // 2/1
```
Fractions are automatically reduced by most operations.

To add two fractions, use the `add` function.
```js
const { add } = require('yetanotherfractionlibrary')

fraction = '1/2'
fraction2 = '1/3'

added = add(fraction, fraction2)
console.log(added) // 5/6
```

To subtract two fractions, use the `sub` function.
```js
const { sub } = require('yetanotherfractionlibrary')

fraction = '3/4'
fraction2 = '1/2'

subtracted = sub(fraction, fraction2)
console.log(subtracted) // 1/4
```

To multiply two fractions, use the `mul` function.
```js
const { mul } = require('yetanotherfractionlibrary')

fraction = '1/2'
fraction2 = '1/2'

multiplied = mul(fraction, fraction2)
console.log(multiplied) // 1/4
```

To divide two fractions, use the `div` function.
```js
const { div } = require('yetanotherfractionlibrary')

fraction = '1/2'
fraction2 = '1/2'

divided = div(fraction, fraction2)
console.log(divided) // 1/1
```

Fractions can be converted to decimal and vice versa.
```js
const { toDecimal, toFraction } = require('yetanotherfractionlibrary')

fraction = '1/2'

decimal = toDecimal(fraction)
console.log(decimal) // 0.5

decimal = "0.6"
fraction = toFraction(decimal)

console.log(fraction) // 3/5
```