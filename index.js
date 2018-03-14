const Chance = require('chance');

// const email = require('./tags/email');
const custom = require('./tags/custom');

const chance = new Chance();
module.exports.templateTags = [
  // email.default(chance),
  custom.default(chance),
];
