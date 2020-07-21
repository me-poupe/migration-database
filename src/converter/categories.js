const _ = require('lodash');

module.exports = (data) => {
  const categories = _.filter(data, { parent: null });

  const result = categories.map((cat) => {
    const subCategories = _.filter(data, { parent: cat._id }, []).map((sub) => {
      delete sub._id;
      delete sub.id;
      delete sub.parent;
      delete sub.active;
      delete sub.createdAt;
      delete sub.updatedAt;

      return sub;
    });

    delete cat._id;
    delete cat.id;
    delete cat.parent;
    delete cat.active;

    return {
      subCategories,
      ...cat,
    };
  });
  return result;
};
