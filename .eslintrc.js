const basic = require('./eslintrc/basic');
const indent = require('./eslintrc/rules/indent');

const eslintrc = {
  'env': Object.assign({}, basic.env),
  'extends': basic.extends,
  'parserOptions': Object.assign({}, basic.parserOptions),
  'rules': Object.assign({}, basic.rules, indent)
};

if ('DEV' === process.env.RUN_ENV) {
  console.log('You are in development environment now.');
  Object.assign(eslintrc.rules, {
    'no-console': 0,
    'no-plusplus': 0,
  });
}

module.exports = eslintrc;