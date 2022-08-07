function noRecursion(num) {
  if (num === 0) return 1;
  let factorial = 1;
  for (let i = 1; i <= num; i++) {
    factorial *= i;
  }
  return factorial;
}

function recursion(num) {
  if (num === 1) return 1;
  return num * recursion(num - 1);
}

function tailRecursion(num, partialFactorial) {
  if (num === 1) {
    return partialFactorial;
  } else {
    return tailRecursion(num - 1, partialFactorial * num);
  }
}

module.exports = { noRecursion, recursion, tailRecursion };
