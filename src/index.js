module.exports = function reverse (n) {
  n < 0 ? n*=-1 : n*=1;
  let nmb = String(n).split('').reverse().join('');
  return Number(nmb);
}
