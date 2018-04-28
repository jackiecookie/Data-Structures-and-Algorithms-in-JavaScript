function selectionSort(arr) {
  var len = arr.length;
  for (var sortwall = len; sortwall >= 0; sortwall--) {
    var maxVal = undefined;
    var maxIndex = undefined;
    for (var i = 0; i < sortwall; i++) {
      if (arr[i] > maxVal || !maxVal) {
        maxVal = arr[i];
        maxIndex = i;
      }
    }
    var sortwallVal = arr[sortwall - 1];
    arr[sortwall - 1] = maxVal;
    arr[maxIndex] = sortwallVal;
  }
  return arr;
}
