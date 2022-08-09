const arrayPagination = require('./array-pagination');
const chai = require('chai');
const expect = chai.expect;

describe('Array pagination', () => {

  it('should return the first 5 by default', () => {
    expect(arrayPagination.changePage(1)).to.have.length(5);
    expect(arrayPagination.changePage(1)).to.deep.include({
      team: 'Germany',
      totalPoints: 1558,
      previousPoints: 1544,
      position: 0
    },
    {
      team: 'Brazil',
      totalPoints: 1431,
      previousPoints: 1384,
      position: 0
    },
    {
      team: 'Belgium',
      totalPoints: 1298,
      previousPoints: 1346,
      position: 0
    },
    {
      team: 'Portugal',
      totalPoints: 1274,
      previousPoints: 1306,
      position: 0
    },
    {
      team: 'Argentina',
      totalPoints: 1241,
      previousPoints: 1254,
      position: 0
    });
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
    },
    {
      team: 'Spain',
      totalPoints: 1126,
      previousPoints: 1162,
      position: 2
    });
  });

  it('third page should return the proper five', () => {
    expect(arrayPagination.changePage(3)).to.have.length(5);
    expect(arrayPagination.changePage(3)).to.deep.include({
      team: 'Peru',
      totalPoints: 1125,
      previousPoints: 1106,
      position: 0
    },
    {
      team: 'Denmark',
      totalPoints: 1051,
      previousPoints: 1054,
      position: 0
    },
    {
      team: 'England',
      totalPoints: 1051,
      previousPoints: 1040,
      position: 1
    },
    {
      team: 'Uruguay',
      totalPoints: 1018,
      previousPoints: 976,
      position: 3
    },
    {
      team: 'Mexico',
      totalPoints: 989,
      previousPoints: 1008,
      position: 0
    });
  });

  it('tenth page should return the last five', () => {
    expect(arrayPagination.changePage(10)).to.have.length(5);
    expect(arrayPagination.changePage(10)).to.deep.include({
      team: 'Czech Republic',
      totalPoints: 641,
      previousPoints: 647,
      position: 1
    },
    {
      team: 'Ghana',
      totalPoints: 624,
      previousPoints: 603,
      position: 3
    },
    {
      team: 'Nigeria',
      totalPoints: 618,
      previousPoints: 635,
      position: 1
    },
    {
      team: 'Bulgaria',
      totalPoints: 614,
      previousPoints: 583,
      position: 4
    },
    {
      team: 'Cameroon',
      totalPoints: 614,
      previousPoints: 603,
      position: 1
    });
  });

});