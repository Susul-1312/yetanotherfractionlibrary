# Yet Another Fraction Library
![Tests](https://github.com/Susul-1312/yetanotherfractionlibrary/actions/workflows/test.yml/badge.svg) [![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)

This is a library for dealing with fractions directly instead of decimal numbers.

## Features
- [x] Fractions are represented as a string containing numerator and denominator.
- [x] Fractions can be simplified.
- [x] Fractions can be added, subtracted, multiplied, and divided.
- [x] Fractions can be compared.
- [x] Fractions can be converted to decimal numbers.
- [x] Decimal numbers can be converted to fractions.

## Installation
yafl has no production dependencies.

To install yafl, run the following command:
```sh
npm install --production yetanotherfractionlibrary
```

## Usage
`FractionString`

A string representing a fraction.
```js
'1/2'
'5/3'
'3/1'
```

`isFraction(<FractionString>) -> Boolean`

Returns `true` if `<FractionString>` is a valid fraction.
```js
isFraction('1/2') // true
isFraction('1/0') // false
isFraction('sdf/sdf') // false
```

`reduce(<FractionString | Number>) -> FractionString`

Reduces a fraction to its simplest form.
```js
reduce('2/4') // '1/2'
```

`add(<FractionString | Number>, <FractionString | Number>) -> FractionString`

Adds two fractions.
```js
add('1/2', '1/4') // '3/4'
```

`sub(<FractionString | Number>, <FractionString | Number>) -> FractionString`

Subtracts two fractions.
```js
sub('5/6', '1/2') // '2/6'
```

`mul(<FractionString | Number>, <FractionString | Number>) -> FractionString`

Multiplies two fractions.
```js
mul('1/2', '1/4') // '1/8'
```

`div(<FractionString | Number>, <FractionString | Number>) -> FractionString`

Divides two fractions.
```js
div('1/2', '1/4') // '2'
```

`pow(<FractionString | Number>, <Number>) -> FractionString`

Raises a fraction to a power.
```js
pow('1/2', 2) // '1/4'
```

`inv(<FractionString | Number>) -> FractionString`

Inverts a fraction.
```js
inv('1/2') // '2/1'
```

`compare(<FractionString | Number>, <FractionString | Number>) -> Number`

Compares two fractions, returning -1 if the first fraction is less than the second, 0 if they are equal, and 1 if the first fraction is greater than the second.
```js
compare('1/2', '3/4') // -1
compare('1/2', '1/2') // 0
compare('1/2', '1/4') // 1
```

`toDecimal(<FractionString>) -> Number`

Converts a fraction to a decimal number.
```js
toDecimal('1/2') // 0.5
```

`toFraction(<Number>) -> FractionString`

Converts a decimal number to a fraction.
```js
toFraction(0.5) // '1/2'
```