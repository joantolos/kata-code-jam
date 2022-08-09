const raceRanking = require('../src/race-ranking');
const chai = require('chai');
const expect = chai.expect;

describe('The race ranking is able to', () => {
  
  it('format the race winners in order', () => {
    let input = require('./raceData.json');

    expect(raceRanking.rank(input.race)).to.deep.equal('Lewis Hamilton, Sebastian Vettel, Daniel Ricciardo, Sergio Pérez, ' +
      'Esteban Ocon, Nico Hülkenberg, Carlos Sainz, Pascal Wehrlein, Daniil Kvyat, Romain Grosjean, Marcus Ericsson, ' +
      'Fernando Alonso, Felipe Massa, Kevin Magnussen, Jolyon Palmer, Lance Stroll');
  });

});