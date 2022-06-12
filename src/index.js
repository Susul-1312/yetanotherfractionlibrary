function FracError(value) {
	return new TypeError(`${value} is not a valid fraction. Please format all fractions like "Integer/NonZeroInteger"`)
}

function isFraction(frac) {
	if (isFinite(frac)) return true;
	if (typeof frac != "string") return false;
	const parts = frac.split("/");
	if (parts.length != 2) return false;
	if (parts[0] != parseInt(parts[0]) || parts[1] != parseInt(parts[1])) return false;
	if (parts[1] == 0) return false;
	return true;
}

function reduce(frac) {
	if (!isFraction(frac)) throw FracError(frac)
	if (isFinite(frac)) return `${frac}/1`

	const [num, denom] = frac.split("/")
	const _gcd = gcd(num, denom)

	let reducedNum = num / _gcd
	let reducedDenom = denom / _gcd

	if (Math.sign(reducedNum * reducedDenom) == -1)
		reducedNum = -Math.abs(reducedNum)
	else
		reducedNum = Math.abs(reducedNum)
	reducedDenom = Math.abs(reducedDenom)

	return `${reducedNum}/${reducedDenom}`
}

function inv(frac) {
	const parts = reduce(frac).split("/")

	return `${parts[1]}/${parts[0]}`
}

function add(a, b) {
	const aParts = reduce(a).split("/")
	const bParts = reduce(b).split("/")

	return reduce(`${aParts[0] * bParts[1] + bParts[0] * aParts[1]}/${aParts[1] * bParts[1]}`)
}

function sub(a, b) {
	return add(a, mul(b, -1))
}

function mul(a, b) {
	const aParts = reduce(a).split("/")
	const bParts = reduce(b).split("/")

	return reduce(`${aParts[0] * bParts[0]}/${aParts[1] * bParts[1]}`)
}

function div(a, b) {
	return mul(a, inv(b))
}

function fracToDec(frac) {
	const parts = reduce(frac).split("/")

	return parts[0] / parts[1]
}

function decToFrac(x) {
	num = parseFloat(x)

	if (num == parseInt(num)) return reduce(num)

	const [iPart, fPart] = num.toString().split(".")

	return reduce(`${iPart.concat(fPart)}/${10 ** fPart.length}`)
}

function gcd(a, b) {
	a = Math.abs(a);
	b = Math.abs(b);
	if (b > a) { var temp = a; a = b; b = temp; }
	while (true) {
		if (b == 0) return a;
		a %= b;
		if (a == 0) return b;
		b %= a;
	}
}

export {
	isFraction,
	reduce,
	inv,
	add,
	sub,
	mul,
	div
}
