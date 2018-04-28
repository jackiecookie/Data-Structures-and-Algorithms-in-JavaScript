function insertionSort(arr) {
  var len = arr.length;
  for (var i = 0; i < len; i++) {
    var compareIndex = i;
    var compareValue = arr[compareIndex];
    var currentVal = arr[i+1];
    while (compareIndex >= 0 && currentVal < compareValue) {
      arr[compareIndex] = currentVal;
      arr[compareIndex + 1] = compareValue;
      compareValue = arr[--compareIndex];
    }
  }
  return arr;
}



