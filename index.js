/**
 * Convert a number to a string with commas
 * http://stackoverflow.com/questions/2901102/how-to-print-a-number-with-commas-as-thousands-separators-in-javascript
 *
 * @param {Number} num
 *
 * @return {String}
 */
module.exports = function(num) {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};