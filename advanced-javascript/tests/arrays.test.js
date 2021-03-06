/* eslint-disable prefer-destructuring */

const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
const arrayFunctions = require('../src/arrays');

const assert = chai.expect;
const expect = chai.expect;
chai.use(sinonChai);

// we've gone ahead and gotten a start here for you,
// except, for some reason, none of our current assertions are working.
// first step is to make sure all these assertions work.
// then make sure you have at least 2-3 more assertions for every function.
// hint 1. - you need to pass data to the functions and get expected output.
// hint 2. - you should test the data type being called back, and perform some sort of operation on the data.
// hint 3. - if the function you're testing requires a * callback *, make sure you use a spy like sinon

describe('Arrays', () => {
  describe('`each`', () => {
    const each = arrayFunctions.each;
    it('should be a function', () => {
      expect(each).to.be.a('function');
    });
    // begin here
    it('should callback each element in the array', () => {
      const cb = sinon.spy();
      const arr = [1, 2, 3, 4];
      const e = each(arr, cb);
      expect(cb.callCount).to.equal(arr.length);
      expect(e).to.equal(undefined);
    });
  });

  describe('`map`', () => {
    const map = arrayFunctions.map;
    it('should be a function', () => {
      const cb = sinon.spy;
      expect(map).to.be.an('function');
    });
    it('should return an array', () => {
      expect(map([1, 2, 3], x => x + 2)).to.be.an('array');
    });
    it('should iterate over each element in the array', () => {
      const cb = sinon.spy();
      map([1, 2, 3, 4], cb);
      expect(cb).to.have.callCount(4);
    });
  });

  describe('`reduce`', () => {
    it('should be a function', () => {
      const reduce = arrayFunctions.reduce;
      expect(reduce).to.be.a('function');
    });
  });

  describe('`find`', () => {
    it('should be a function', () => {
      const find = arrayFunctions.find;
      expect(find).to.be.an('function');
    });
  });

  describe('`filter`', () => {
    it('should be a function', () => {
      const filter = arrayFunctions.filter;
      expect(filter).to.be.a('function');
    });
  });

  describe('`flatten`', () => {
    it('should be a function', () => {
      const flatten = arrayFunctions.flatten;
      expect(flatten).to.be.a('function');
    });
  });
});
