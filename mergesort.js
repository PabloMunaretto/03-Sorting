function split(wholeArray) {
    let half = Math.floor(wholeArray.length/2)
    let arr1 = wholeArray.slice(0, half)
    let arr2 = wholeArray.slice(half)
    
    return [arr1, arr2]
}

function merge(arr1 , arr2) { // [1, 5] [3, 7]
    var i1 = 0; // i1 = 1 => i1 = 2
    var i2 = 0; // i2 = 1 => i2 = 2
    let mergedArr = [] // [1] =>[1, 3] => [1, 3, 5] => [1, 3, 5, 7]
    while (i1 < arr1.length || i2 < arr2.length) {
        if(arr1[i1] < arr2[i2] || !arr2[i2]) {
            mergedArr.push(arr1[i1]);
            i1++;
        } else {
            mergedArr.push(arr2[i2]);
            i2++;
        }
    }
    return mergedArr;
}

function mergeSort(array) {
// n* log(n)
    if (array.length <= 1) {
        return array
    } 
    let [arr1, arr2] = split(array)
    return merge(mergeSort(arr1), mergeSort(arr2))
}

/*
mergeSort([1,5,3,7])
    arr1 = [1,5]
    arr2 = [3,7]
    return merge([1,5], [3,7]) // [1,3,5,7]
        mergeSort([1,5])
            arr1 = [1]
            arr2 = [5]
            return merge([1], [5]); // <--- [1,5]
                mergeSort([1]) = [1]
                mergeSort([5]) = [5]
        
        mergeSort([3,7])
            arr1 = [3]
            arr2 = [7]
            return merge([3], [7]) <--- [3,7]
*/