module.exports = function reverse (n) {
  let num = Math.abs(n);
  num = String(num);
  num = num.split("").reverse().join("");
  return(+num);
}
