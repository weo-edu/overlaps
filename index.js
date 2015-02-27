module.exports = function(arr1, arr2, cmp) {
  cmp = cmp || function(a, b) { return a === b; };

  return arr1.some(function(item) {
    for(var i = 0, len = arr2.length; i < len; i++)
      if(cmp(arr2[i], item))
        return true;
  });
};