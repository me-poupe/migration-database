const extract = require('../../extractData');

const locationKeys = {
  coordinates: 'companyLocation.coordinates',
  address: 'companyLocation.address',
  number: 'companyLocation.number',
  complement: 'companyLocation.complement',
  city: 'companyLocation.city',
  state: 'companyLocation.state',
  zipcode: 'companyLocation.zipcode',
  neighborhood: 'companyLocation.neighborhood',
};

module.exports = (data) => extract(data, locationKeys);
