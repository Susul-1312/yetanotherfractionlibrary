const assert = require('assert')
const { isFraction, reduce, add, sub, mul, div, pow, toDecimal, toFraction, compare } = require('..')

describe('isFraction', () => {
    it('should return true for fractions', () => {
        assert.equal(isFraction('1/2'), true)
        assert.equal(isFraction('1/3'), true)
        assert.equal(isFraction('-1/4'), true)
    })
    it('should return true for integers', () => {
        assert.equal(isFraction('3'), true)
        assert.equal(isFraction('4'), true)
        assert.equal(isFraction('0'), true)
        assert.equal(isFraction('-3'), true)
    })
    it('should return false for invalid number of denominators', () => {
        assert.equal(isFraction('1/2/3'), false)
        assert.equal(isFraction('1/2/3/4'), false)
    })

    it('should return false for fractions containing not numbers', () => {
        assert.equal(isFraction('a'), false)
        assert.equal(isFraction('1/a'), false)
        assert.equal(isFraction('a/3'), false)
        assert.equal(isFraction('1/a/3'), false)
    })

    it('should return false for fractions containing decimals', () => {
        assert.equal(isFraction('0.3'), false)
        assert.equal(isFraction('0.3/0.4'), false)
    })
})

describe("reduce", function () {
    it('should reduce 3/6 to 1/2', function () {
        assert.equal(reduce("3/6"), "1/2");
    })
    it('should reduce 2/3 to 2/3', function () {
        assert.equal(reduce("2/3"), "2/3");
    })
    it('should reduce 1/-2 to -1/2', function () {
        assert.equal(reduce("1/-2"), "-1/2");
    })
    it('should reduce -1/-2 to 1/2', function () {
        assert.equal(reduce("-1/-2"), "1/2");
    })
    it('should reduce 4 to 4/1', function () {
        assert.equal(reduce("4"), "4/1");
    })
})

describe("add", function () {
    it('should add 1/2 to 1/2 to get 1/1', function () {
        assert.equal(add("1/2", "1/2"), "1/1");
    })
    it('should add 1/2 to -1/2 to get 0/1', function () {
        assert.equal(add("1/2", "-1/2"), "0/1");
    })
    it('should add 2/3 and 1/6 to get 5/6', function () {
        assert.equal(add("2/3", "1/6"), "5/6");
    })
})

describe("sub", function () {
    it('should subtract 1/2 from 1/2 to get 0/1', function () {
        assert.equal(sub("1/2", "1/2"), "0/1");
    })
    it('should subtract 3/2 from 1/2 to get -1/1', function () {
        assert.equal(sub("1/2", "3/2"), "-1/1");
    })
    it('should subtract 4/5 from 8/7 to get 12/35', function () {
        assert.equal(sub("8/7", "4/5"), "12/35");
    })
})

describe("mul", function () {
    it('should multiply 1/2 by 1/2 to get 1/4', function () {
        assert.equal(mul("1/2", "1/2"), "1/4");
    })
    it('should multiply 1/2 by -1/2 to get -1/4', function () {
        assert.equal(mul("1/2", "-1/2"), "-1/4");
    })
    it('should multiply 2/3 by 1/6 to get 1/9', function () {
        assert.equal(mul("2/3", "1/6"), "1/9");
    })
})

describe("div", function () {
    it('should divide 1/2 by 1/2 to get 1/1', function () {
        assert.equal(div("1/2", "1/2"), "1/1");
    })
    it('should divide 1/2 by -1/2 to get -1/1', function () {
        assert.equal(div("1/2", "-1/2"), "-1/1");
    })
    it('should divide 2/3 by 1/6 to get 4/1', function () {
        assert.equal(div("2/3", "1/6"), "4/1");
    })
})

describe("toDecimal", function () {
    it('should convert 1/2 to 0.5', function () {
        assert.equal(toDecimal("1/2"), "0.5");
    })
    it('should convert -1/2 to -0.5', function () {
        assert.equal(toDecimal("-1/2"), "-0.5");
    })
    it('should convert 7/5 to 1.6', function () {
        assert.equal(toDecimal("7/5"), "1.4");
    })
    it('should convert -7/5 to -1.6', function () {
        assert.equal(toDecimal("-7/5"), "-1.4");
    })
})

describe("toFraction", function () {
    it('should convert 0.5 to 1/2', function () {
        assert.equal(toFraction("0.5"), "1/2");
    })
    it('should convert -0.5 to -1/2', function () {
        assert.equal(toFraction("-0.5"), "-1/2");
    })
    it('should convert 1.6 to 7/5', function () {
        assert.equal(toFraction("1.4"), "7/5");
    })
    it('should convert -1.6 to -7/5', function () {
        assert.equal(toFraction("-1.4"), "-7/5");
    })
})

describe("compare", function () {
    it('should compare 1/2 to 1/2 to be 0', function () {
        assert.equal(compare("1/2", "1/2"), 0);
    })
    it('should compare 1/2 to 1/3 to be 1', function () {
        assert.equal(compare("1/2", "1/3"), 1);
    })
    it('should compare 1/2 to -1/3 to be 1', function () {
        assert.equal(compare("1/2", "-1/3"), 1);
    })
    it('should compare 1/2 to -1/2 to be 1', function () {
        assert.equal(compare("1/2", "-1/2"), 1);
    })
    it('should compare 5/6 to 1/1 to be -1', function () {
        assert.equal(compare("5/6", "1/1"), -1);
    })
    it('should compare -5/6 to -1/1 to be 1', function () {
        assert.equal(compare("-5/6", "-1/1"), 1);
    })
})

describe("pow", function () {
    it('should raise 1/2 to the power of 2 to get 1/4', function () {
        assert.equal(pow("1/2", 2), "1/4");
    })
    it('should raise 1/2 to the power of 3 to get 1/8', function () {
        assert.equal(pow("1/2", 3), "1/8");
    })
    it('should raise 2/3 to the power of 2 to get 4/9', function () {
        assert.equal(pow("2/3", 2), "4/9");
    })
    it('should raise -2/3 to the power of 2 to get 4/9', function () {
        assert.equal(pow("-2/3", 2), "4/9");
    })
    it('should raise 2/3 to the power of -2 to get 9/4', function () {
        assert.equal(pow("2/3", -2), "9/4");
    })
})