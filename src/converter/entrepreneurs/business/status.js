const statusEnum = {
  0: 'Pending',
  1: 'Active',
  2: 'Refused',
};

module.exports = (data) => statusEnum[data.status];
