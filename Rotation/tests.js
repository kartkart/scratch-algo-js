require('./solution.js');
module.exports = sinon = require("sinon");
module.exports = expect = require("chai").expect;

describe('isRotation', function () {
  var str1, str2;
  beforeEach(function () {
    str1 = "waterbottle";
    str2 = "erbottlewat";
  });
  it('returns false if strings are not same length', function () {
    expect(Solution.isRotation("hello", "")).to.be.false
  });
  it('returns false if str1 is blank', function () {
    expect(Solution.isRotation("", "")).to.be.false
  });
  it('returns true if str2 is rotation of str1', function () {
    expect(Solution.isRotation(str1, str2)).to.be.true
  });
});