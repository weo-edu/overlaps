module.exports = function(arr1, arr2, cmp) {
  cmp = cmp || function(a, b) { return a === b; };

  return arr1.some(function(item) {
    return arr2.some(function(item2) {
      return cmp(item, item2);
    });
  });
};