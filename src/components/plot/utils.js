/**
 * Adds the n key to chart object as per the Recharts documentation.
 *
 * @link https://recharts.org/en-US/examples
 *
 * @param {Object} heuristic     Description.
 * @return {Object} Return value description.
 */
export const filterHeuristic = (heuristic) => {
  heuristic.forEach((item, i) => {
    item.n = i + 1;
  });

  return heuristic;
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
