const _ = require('lodash');

module.exports = (data, keys) => {
  let result = {};

  Object.keys(keys).forEach((key) => {
    result[key] = _.get(data, keys[key], null);
  });

  return result;
};
