const extract = require('../../extractData');

const adKeys = {
  title: 'companyOfferTitle',
  description: 'companyOfferDescription',
  slug: 'slug',
};

module.exports = (data) => {
  const result = extract(data, adKeys);
  return [result];
};
