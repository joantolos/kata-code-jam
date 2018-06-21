const uuidGenerator = require('../src/uuid-generator');
const chai = require('chai');
const expect = chai.expect;
const uuidRegexValidator = /^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/;

describe('UUID utils', () => {

  it('should generate a valid token', () => {
    expect(uuidRegexValidator.test(uuidGenerator.generate())).to.be.true;
  });

});