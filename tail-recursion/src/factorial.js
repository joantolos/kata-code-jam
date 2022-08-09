function noRecursion(num) {
  if (num === 0) return 1;
  let factorial = 1;
  for (let i = 1; i <= num; i++) {
    factorial *= i;
  }
  return factorial;
}

// Stack trace detail:
// recursion(5)
// 5 * recursion(4)
// 5 * (4 * recursion(3))
// 5 * (4 * (3 * recursion(2)))
// 5 * (4 * (3 * (2 * recursion(1))))
// 5 * (4 * (3 * (2 * (1 * recursion(0)))))
// 5 * (4 * (3 * (2 * (1 * 1))))
// 5 * (4 * (3 * (2 * 1)))
// 5 * (4 * (3 * 2))
// 5 * (4 * 6)
// 5 * 24
// 120
function recursion(num) {
  if (num === 0) return 1;
  return num * recursion(num - 1);
}

// Stack trace detail:
// tailRecursion(5, 1)
// tailRecursion(4, 1 * 5)
// tailRecursion(3, 5 * 4)
// tailRecursion(2, 20 * 3)
// tailRecursion(1, 60 * 2)
// tailRecursion(0, 120 * 1)
// 120
function tailRecursion(num, partialFactorial) {
  // console.log('tailRecursion(' + (num - 1) + ', ' + partialFactorial + ' * ' + num + ')');
  if (num === 0) {
    return partialFactorial;
  } else {
    return tailRecursion(num - 1, partialFactorial * num);
  }
}

module.exports = { noRecursion, recursion, tailRecursion };
