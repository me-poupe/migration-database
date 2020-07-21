module.exports = (data) => ({
  user: require('./users')(data),
  business: require('./business')(data),
});
