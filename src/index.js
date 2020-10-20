module.exports = function reverse (n) {
  if (n < 0) {n*=-1};
  let   arr = String(n).split('').reverse();
  if (arr[arr.length] === 0){
      delete arr[arr.length];
  }
  return +arr.join('')
}
