const converter = require('../../converter/entrepreneurs');
const mock = require('../mocks/entrepreneurs.json');
const userOutput = require('../outputs/users.json');
const businessOutput = require('../outputs/business.json');

describe('Convert function', () => {
  describe('Users', () => {
    it('should return correct user data', () => {
      const { user } = converter(mock[0]);

      expect(user).toEqual(userOutput[0]);
    });
  });

  describe('Businesses', () => {
    it('should return correct business data', () => {
      const { business } = converter(mock[0]);

      expect(business).toEqual(businessOutput[0]);
    });
  });
});
