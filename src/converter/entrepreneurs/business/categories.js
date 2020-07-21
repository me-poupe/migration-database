const _ = require('lodash');
const extract = require('../../extractData');
const categoriesLegacy = require('../../../backups/20-06/categories.json');

const categoryKeys = {
  image: 'image',
  name: 'name',
  slug: 'slug',
};

const subCategoryKeys = {
  name: 'name',
  slug: 'slug',
};

module.exports = (data) => {
  // pega a lista de categorias
  const dataCategories = _.get(data, 'companyCategory', []);

  // para cada categoria retonar um array
  const categories = dataCategories.map((category) => {
    // busca a categoria dos backups
    const foundedCategory = _.find(categoriesLegacy, [
      '_id.$oid',
      category.$oid,
    ]);

    // extrai os dados da categoria
    const extractedCategory = extract(foundedCategory, categoryKeys);

    // busca todas as sub categorias com o id do pai
    const subs = _.map(data.companyCategorySub, (s) =>
      _.find(
        categoriesLegacy,
        ['_id.$oid', s.$oid],
        'parent.$oid',
        category.$oid,
      ),
    );

    // extrai os dados da sub categoria
    const subCategories = subs.map((sub) => extract(sub, subCategoryKeys));

    // retorna os dados obtidos
    return { ...extractedCategory, subCategories };
  });

  return categories;
};
