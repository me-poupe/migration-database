const categories = require('./__tests__/outpus/categories.json');
const axios = require('axios');
const logger = require('./utils/logger');

const main = async () => {
  logger('start');
  const api = axios.create({
    baseURL: 'http://localhost:3000',
  });

  for (category of categories) {
    logger(`sending ${category.name} to api`);
    console.log(category);

    try {
      const result = await api.post('/categories', category);
      console.log(result.data);
    } catch (error) {
      console.log(error);
      break;
    }
  }

  logger('finish');
};

main();
