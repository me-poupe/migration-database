const extractor = require('../extractData');

const userKeys = {
  _id: '_id',
  name: 'name',
  birthdate: 'birthdate',
  email: 'email',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  password: 'password',
};

module.exports = (data) => {
  return {
    role: 'user',
    ...extractor(data, userKeys),
  };
};
