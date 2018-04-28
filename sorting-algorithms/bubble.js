function bubbleSort(arr) {
  var len = arr.length;
  for (var i = len; i >= 0; i--) {
    for (var j = 0; j < i; j++) {
      var perVal = arr[j];
      var val = arr[j + 1];
      if (perVal > val) {
        arr[j + 1] = perVal;
        arr[j] = val;
      }
    }
  }
  return arr;
}
