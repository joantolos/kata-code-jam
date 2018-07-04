const arrayPagination = require('../src/array-pagination');
const chai = require('chai');
const expect = chai.expect;

describe('Array pagination', () => {

  it('should return the first 5 by default', () => {
    expect(arrayPagination.changePage(1)).to.have.length(5);
  });

});