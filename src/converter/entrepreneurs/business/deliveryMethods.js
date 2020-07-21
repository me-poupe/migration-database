const _ = require('lodash');
const deliverymethods = require('../../../backups/20-06/deliverymethods.json');

module.exports = (data) => {
  return _.map(data.companyDeliveryMethods, (method) => {
    return _.find(deliverymethods, ['_id.$oid', method.$oid]).name;
  });
};
