
function resolve(number) {
  if (number % 15 === 0) {
    return 'FizzBuzz';
  } else if (number % 3 === 0) {
    return 'Fizz';
  } else if (number % 5 === 0) {
    return 'Buzz';
  }
  return number.toString();
}

function run(numbers) {
  const output = [];
  for (let number = 1; number <= numbers; number++) {
    output.push(this.resolve(number));
  }
  return output.join('\n');
}

function runRecursive(numbers, output) {
  if (!output) {
    output = '';
  }
  // if (numbers === 1) {
  //   return (output + '\n' + resolve(numbers))
  //     .split('\n')
  //     .reverse()
  //     .join('\n');
  // }
  if (numbers === 1) {
    const outputs = (output + '\n' + resolve(numbers))
      .split('\n')
      .reverse();
    outputs.pop();
    return outputs.join('\n');
  }
  return runRecursive(numbers - 1, output + '\n' + resolve(numbers));
}

function print(total) {
  console.log(this.run(total));
}

module.exports = { resolve, print, run, runRecursive };
