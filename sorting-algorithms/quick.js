function quickSort(arr) {
  var j = arr.length - 1;
  var i = 0;
  var p = partition(arr, i, j);
  partition(arr, i, p);
  partition(arr, p + 1, j);
  return arr;
}

function partition(arr, lo, hi) {
  var pivot = arr[hi];
  var pivotLoc = lo;
  for (var i = lo; i < hi; i++) {
    var val = arr[i];
    if (val <= pivot) {
      swap(arr, pivotLoc, i);
      pivotLoc++;
    }
  }
  swap(arr, pivotLoc, hi);
  return pivotLoc;
}

function swap(arr, i1, i2) {
  if (i1 === i2) return;
  var temp = arr[i1];
  arr[i1] = arr[i2];
  arr[i2] = temp;
  return arr;
}

var arr = quickSort([0, 7, 6, 1, 4])
console.log(arr)

