const _ = require('lodash');
const extract = require('../../extractData');

const businessKeys = {
  userId: '_id',
  name: 'companyName',
  description: 'companyDescription',
  isFormal: 'companyIsFormal',
  document: 'companyDocument',
  haveALocal: 'companyHaveALocal',
  deliveryRadius: 'companyDeliveryRadius',
  attendsHome: 'companyAttendsHome',
  openingWeekHoursFrom: 'companyOpeningWeekHoursFrom',
  openingWeekHoursTo: 'companyOpeningWeekHoursTo',
  openingWeekendHoursFrom: 'companyOpeningWeekendHoursFrom',
  openingWeekendHoursTo: 'companyOpeningWeekendHoursTo',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  photo: 'photo',
  acceptedTerms: 'companyOptIn',
  acceptedImageTerms: 'companyImagesOptIn',
};

module.exports = (data) => {
  const business = extract(data, businessKeys);

  const type = data.type === 1 ? 'Produto' : 'Serviço';

  const images = data.companyImages.map((image) => {
    return {
      main: _.get(image, 'principal', false),
      url: _.get(image, 'image', null),
    };
  });

  return {
    type,
    images,
    ...business,
  };
};
