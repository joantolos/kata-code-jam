const stringComposer = require('../src/string-composer');
const chai = require('chai');
const expect = chai.expect;

describe('The String Composer is able to', () => {
  
  it('format a list of quotes ready to print on HTML', () => {
    expect(stringComposer.createQuote(require('./bookQuotes/input.json'))).to.be.equal(require('./bookQuotes/input.json'));
  });

});