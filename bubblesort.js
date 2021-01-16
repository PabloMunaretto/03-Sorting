
function bubbleSort(arr) {
  for (var j = arr.length; j > 0; j--) {
    var swapped = false;
    for (var i = 0; i < j - 1; i++) {
      if (!inOrder(arr, i)) {
        swap(arr, i);
        swapped = true;
      }
    }
    if (!swapped) break;
  }
  return arr;
}

function swap(arr, i){
    [arr[i], arr[i+1]] = [arr[i+1], arr[i]]
}

function inOrder (array, i){
    if (array[i] < array[i+1] && array[i+1]) {
        return true
    } else {
      return false;
    }
}
