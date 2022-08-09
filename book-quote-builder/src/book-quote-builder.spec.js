const bookQuoteBuilder = require('./book-quote-builder');
const chai = require('chai');
const expect = chai.expect;

describe('The Book Quote Builder is able to', () => {
  
  it('format a list of quotes ready to print on HTML', () => {
    let input = require('./input.json');
    let expectedOutput = require('./expectedOutput.json');

    expect(bookQuoteBuilder.build(input)).to.deep.equal(expectedOutput);
  });

});