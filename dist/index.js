"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

function FracError(value) {
	return new TypeError(value + " is not a valid fraction. Please format all fractions like \"Integer/NonZeroInteger\"");
}

function isFraction(frac) {
	if (isFinite(frac)) return true;
	if (typeof frac != "string") return false;
	var parts = frac.split("/");
	if (parts.length != 2) return false;
	if (parts[0] != parseInt(parts[0]) || parts[1] != parseInt(parts[1])) return false;
	if (parts[1] == 0) return false;
	return true;
}

function reduce(frac) {
	if (!isFraction(frac)) throw FracError(frac);
	if (isFinite(frac)) return frac + "/1";

	var _frac$split = frac.split("/"),
	    _frac$split2 = _slicedToArray(_frac$split, 2),
	    num = _frac$split2[0],
	    denom = _frac$split2[1];

	var _gcd = gcd(num, denom);

	var reducedNum = num / _gcd;
	var reducedDenom = denom / _gcd;

	if (Math.sign(reducedNum * reducedDenom) == -1) reducedNum = -Math.abs(reducedNum);else reducedNum = Math.abs(reducedNum);
	reducedDenom = Math.abs(reducedDenom);

	return reducedNum + "/" + reducedDenom;
}

function inv(frac) {
	var parts = reduce(frac).split("/");

	return parts[1] + "/" + parts[0];
}

function add(a, b) {
	var aParts = reduce(a).split("/");
	var bParts = reduce(b).split("/");

	return reduce(aParts[0] * bParts[1] + bParts[0] * aParts[1] + "/" + aParts[1] * bParts[1]);
}

function sub(a, b) {
	return add(a, mul(b, -1));
}

function mul(a, b) {
	var aParts = reduce(a).split("/");
	var bParts = reduce(b).split("/");

	return reduce(aParts[0] * bParts[0] + "/" + aParts[1] * bParts[1]);
}

function div(a, b) {
	return mul(a, inv(b));
}

function toDecimal(frac) {
	var parts = reduce(frac).split("/");

	return parts[0] / parts[1];
}

function toFraction(x) {
	var num = parseFloat(x);

	if (num == parseInt(num)) return reduce(num);

	var _num$toString$split = num.toString().split("."),
	    _num$toString$split2 = _slicedToArray(_num$toString$split, 2),
	    iPart = _num$toString$split2[0],
	    fPart = _num$toString$split2[1];

	return reduce(iPart.concat(fPart) + "/" + 10 ** fPart.length);
}

function gcd(a, b) {
	a = Math.abs(a);
	b = Math.abs(b);
	if (b > a) {
		var temp = a;a = b;b = temp;
	}
	while (true) {
		if (b == 0) return a;
		a %= b;
		if (a == 0) return b;
		b %= a;
	}
}

exports.isFraction = isFraction;
exports.reduce = reduce;
exports.inv = inv;
exports.add = add;
exports.sub = sub;
exports.mul = mul;
exports.div = div;
exports.fracToDec = fracToDec;
exports.decToFrac = decToFrac;