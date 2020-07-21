const _ = require('lodash');
const solicitationMethods = require('../../../backups/20-06/solicitationmethods.json');
const { concat } = require('lodash');

module.exports = (data) => {
  const contacts = _.map(data.companySolicitationMethods, (contact) => {
    const contactId = _.get(contact, 'solicitationMethod.$oid');
    const foundedMethod = _.find(solicitationMethods, ['_id.$oid', contactId]);

    return {
      value: contact.extraField,
      type: foundedMethod.name,
    };
  });

  if (data.companyInstagramUsername) {
    contacts.push({ value: data.companyInstagramUsername, type: 'Instagram' });
  }

  if (data.companyFacebookUrl) {
    contacts.push({ value: data.companyFacebookUrl, type: 'Facebook' });
  }

  return contacts.map((contact) => {
    if (contact.type === 'Telefone' || contact.type === 'Whatsapp') {
      return { ...contact, value: contact.value.replace(/\D/g, '') };
    }
    return contact;
  });
};
