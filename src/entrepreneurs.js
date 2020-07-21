const fs = require('fs');
const converter = require('./converter/entrepreneurs');
const logger = require('./utils/logger');
const entrepreneurs = require('./backups/20-06/entrepreneurs.json');

const save = (file, data) =>
  fs.writeFile(`./src/extractedData/21-07/${file}.json`, data, (err) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log('File has been created');
  });

const main = async () => {
  const users = [];
  const businesses = [];

  logger('start');

  let skip = 0;

  for (const entrepreneur of entrepreneurs) {
    logger(`entrepreneur: ${entrepreneur.name}`);

    logger('Converting');
    const { user, business } = converter(entrepreneur);
    businesses.push(business);
    users.push(user);

    skip++;
    logger(`counter ${skip}`);
  }

  save('businesses', JSON.stringify(businesses, null, 2));
  save('users', JSON.stringify(users, null, 2));

  logger('finish');
};

main();
