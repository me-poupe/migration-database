module.exports = (data) => {
  return {
    location: require('./location')(data),
    ads: require('./ads')(data),
    categories: require('./categories')(data),
    paymentMethods: require('./paymentMethods')(data),
    deliveryMethods: require('./deliveryMethods')(data),
    contacts: require('./contacts')(data),
    workDays: require('./workDays')(data),
    status: require('./status')(data),
    ...require('./root')(data),
  };
};
