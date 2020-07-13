/**
 * Adds the n key to chart object as per the Recharts documentation.
 *
 * @link https://recharts.org/en-US/examples
 *
 * @param {Object} heuristic     Description.
 * @return {Object} Return value description.
 */
export const filterHeuristic = (heuristic) => {
  heuristic.forEach((item, j) => {
    item.n = j + 1;
  });

  return heuristic;
};
