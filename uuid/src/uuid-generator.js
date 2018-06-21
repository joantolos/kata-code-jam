const uuidv4 = require('uuid/v4');

const generate = () => {
  return uuidv4();
};

module.exports = {
  generate
};