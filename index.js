const addDays = require("date-fns/addDays");
function getAddXDays(days) {
  const result = addDays(new Date(2020, 7, 22), days);
  return `${result.getDate()}-${result.getMonth() + 1}-${result.getFullYear()}`;
}

module.exports = getAddXDays(1);
console.log(getAddXDays(3));
