function merge(larr, Rarr) {
  var Llen = larr.length;
  var Rlen = Rarr.length;
  var lCurrentIndex = 0;
  var rCurrentIndex = 0;
  var result = [];
  while (result.length < (Llen + Rlen)) {
    if (lCurrentIndex === Llen) {
      result = result.concat(Rarr.slice(rCurrentIndex))
    } else if (rCurrentIndex === Rlen) {
      result = result.concat(larr.slice(lCurrentIndex))
    } else if (larr[lCurrentIndex] < Rarr[rCurrentIndex]) {
      result.push(larr[lCurrentIndex++])
    } else {
      result.push(Rarr[rCurrentIndex++])
    }
  }
  return result;
}


function mergeSort(arr) {
  if (arr.length < 2) return arr;
  var mid = arr.length / 2;
  var larr = arr.slice(0, mid);
  var Rarr = arr.slice(mid);
  var lSorted = mergeSort(larr);
  var rSorted = mergeSort(Rarr);
  return merge(lSorted, rSorted);
}


var result = mergeSort([7, 4, 6, 9, 1, 2, 3, 10, 15, 66])
console.log(result);

