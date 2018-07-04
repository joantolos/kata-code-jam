const arrayPagination = require('../src/array-pagination');
const chai = require('chai');
const expect = chai.expect;

describe('Array pagination', () => {

  it('should return the first 5 by default', () => {
    expect(arrayPagination.changePage(1)).to.have.length(5);
  });

  it('second page should return the proper next five', () => {
    expect(arrayPagination.changePage(2)).to.have.length(5);
    expect(arrayPagination.changePage(2)).to.deep.include({
      team: 'Switzerland',
      totalPoints: 1199,
      previousPoints: 1179,
      position: 0
    },
    {
      team: 'France',
      totalPoints: 1198,
      previousPoints: 1166,
      position: 0
    },
    {
      team: 'Poland',
      totalPoints: 1183,
      previousPoints: 1128,
      position: 2
    },
    {
      team: 'Chile',
      totalPoints: 1135,
      previousPoints: 1146,
      position: 0
    });
  });

});