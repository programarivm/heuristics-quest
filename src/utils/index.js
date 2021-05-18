/**
 * @link https://recharts.org/en-US/examples
 *
 * @param {Object} heuristic     Description.
 * @return {Object} Return value description.
 */
export const prepareHeuristicPicture = (heuristicPicture) => {
  let result = [];
  const dimension = heuristicPicture.w[0].length;
  for (let i = 0; i < dimension; i++) {
    let data = [];
    heuristicPicture.w.forEach((item, j) => {
      let w = item[i];
      let b = heuristicPicture.b[j][i];
      data.push({
          n: j + 1,
          w: w,
          b: b,
          balance: w - b
      });
    });
    result.push(data);
  }

  return result;
};

export const calcSubtotal = (heuristic) => {
  let total = {
    w: 0,
    b: 0
  };
  heuristic.forEach((item, i) => {
    total.w += item.w;
    total.b += item.b;
  });
  total.w = Math.round(total.w * 100) / 100;
  total.b = Math.round(total.b * 100) / 100;

  return total;
};

/**
 * @link https://github.com/trekhleb/javascript-algorithms
 *
 * @param {Array} set
 * @param {number} size
 * @return {Array}
 */
export const permutateWithRepetitions = (set, size = set.length) => {
  if (size === 1) {
    return set.map((item) => [item]);
  }
  const permutations = [];
  const smallerPermutations = permutateWithRepetitions(set, size - 1);
  set.forEach((currentOption) => {
    smallerPermutations.forEach((smallerPermutation) => {
      permutations.push([currentOption].concat(smallerPermutation));
    });
  });

  return permutations;
};

/**
 * @param {Array} set
 * @param {number} size
 * @param {number} sum
 * @return {Array}
 */
export const permutateWithRepetitionsRestricted = (set, size = set.length, sum) => {
  if (size === 1) {
    return set.map((item) => [item]);
  }
  const permutations = [];
  const smallerPermutations = permutateWithRepetitions(set, size - 1);
  set.forEach((currentOption) => {
    smallerPermutations.forEach((smallerPermutation) => {
      let item = [currentOption].concat(smallerPermutation);
      let restriction = item.reduce(function(a, b){
        return a + b;
      }, 0);
      if (sum === restriction) {
        permutations.push(item);
      }
    });
  });

  return permutations;
};

export const optimalWeights = (permutations, results) => {
  let optimal = {
    current: 0,
    permutation: []
  };
  results.forEach((result) => {
    permutations.forEach((permutation) => {
      let multiplication = permutation.reduce((r, a, i) => { return r + a * results[i] }, 0);
      if (multiplication >= optimal.current) {
        optimal.current = multiplication;
        optimal.permutation = permutation;
      }
    });
  });

  return optimal.permutation;
};
