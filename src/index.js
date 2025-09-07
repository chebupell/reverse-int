module.exports = function reverse(n) {
  const newNum = Math.abs(n).toString();
  const reversedStr = newNum.split('').reverse().join('');
  return reversedStr;
};
