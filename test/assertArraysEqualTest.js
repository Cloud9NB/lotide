const { Assertion } = require('chai');
const assertArraysEqual = require('../assertArraysEqual');
const assert = require('chai').assert;

describe('#assertArraysEqual function', () => {
  it('returns 1, 2, 3 for [1, 2, 3]', () => {
    assert.strictEqual(assertArraysEqual([1, 2, 3], [1, 2, 3]));
  });

  it ('returns 1, 2, 3 for [1, 2, 3]', () => {
    assert.strictEqual(assertArraysEqual([1, 2, 3], [1, 2, 3]));
  });

  it ('returns 1, 2, 3 for [\'1\', \'2\', \'3\']', () => {
    assert.strictEqual(assertArraysEqual(['1', '2', '3'], ['1', '2', '3']));
  });

});