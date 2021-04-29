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
      data.push({
          n: j + 1,
          w: item[i],
          b: heuristicPicture.b[j][i],
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

  return total;
};
