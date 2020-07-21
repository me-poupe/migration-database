const workdaysEnum = {
  0: 'Seg',
  1: 'Ter',
  2: 'Qua',
  3: 'Qui',
  4: 'Sex',
  5: 'Sáb',
  6: 'Dom',
};

module.exports = (data) => data.companyWorkDays.map((day) => workdaysEnum[day]);
