const bookQuoteBuilder = require('../src/book-quote-builder');
const chai = require('chai');
const expect = chai.expect;

describe('The Book Quote Builder is able to', () => {
  
  it('format a list of quotes ready to print on HTML', () => {
    let input = require('./bookQuotes/input.json');
    let expectedOutput = require('./bookQuotes/expectedOutput.json');

    expect(bookQuoteBuilder.build(input)).to.deep.equal(expectedOutput);
  });

});