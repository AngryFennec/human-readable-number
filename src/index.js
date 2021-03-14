module.exports = function toReadable (number) {
  if (number < 100) {
    return to100(number);
  }

  const tens = to100(number % 100);
  const hundreds = byDigit(Math.floor(number / 100)) + ' hundred';
  if (number % 100 === 0) {
    return hundreds;
  }
  return  hundreds + ' ' + tens;
}

function byDigit(n) {
  switch (n) {
    case 0: return 'zero';
    case 1: return 'one';
    case 2: return 'two';
    case 3: return 'three';
    case 4: return 'four';
    case 5: return 'five';
    case 6: return 'six';
    case 7: return 'seven';
    case 8: return 'eight';
    case 9: return 'nine';
  }
}

function byTen(n) {
  switch (n) {
    case 10: return 'ten';
    case 20: return 'twenty';
    case 30: return 'thirty';
    case 40: return 'forty';
    case 50: return 'fifty';
    case 60: return 'sixty';
    case 70: return 'seventy';
    case 80: return 'eighty';
    case 90: return 'ninety';
  }
}

function in11to19(n) {
  switch (n) {
    case 11: return 'eleven';
    case 12: return 'twelve';
    case 13: return 'thirteen';
    case 14: return 'fourteen';
    case 15: return 'fifteen';
    case 16: return 'sixteen';
    case 17: return 'seventeen';
    case 18: return 'eighteen';
    case 19: return 'nineteen';
  }
}

function to100(number) {
  if (number < 10) {
    return byDigit(number);
  }
  if (number >= 11 && number <= 19) {
    return in11to19(number);
  }
  if (number < 100 && number % 10 === 0) {
    return byTen(number);
  }
  if (number >= 20 && number <= 100) {
    return byTen(number - number % 10) + ' ' + byDigit(number%10);
  }
}