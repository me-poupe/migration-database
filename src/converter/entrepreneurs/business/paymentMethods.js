const _ = require('lodash');
const paymentMethods = require('../../../backups/20-06/paymentmethods.json');

module.exports = (data) => {
  return _.map(data.companyPaymentMethods, (method) => {
    return _.find(paymentMethods, ['_id.$oid', method.$oid]).name;
  });
};
