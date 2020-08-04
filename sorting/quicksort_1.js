function swap  (list, a, b) {
    [list[a], list[b]] = [list[b], list[a]];
    }
function pivot (arr, start = 0) {
    let pivot = arr[start],
        pointer = start;  
    for (let i = start; i < arr.length; i++) {
      if (arr[i] < pivot  ) {
        pointer++;
        swap(arr, pointer, i);
      }
    };
    swap(arr, start, pointer); 
    return pointer;
  }
  function quickSort(arr, start = 0, end = arr.length) {
    let pivotIndex = pivot(arr, start); 
    if (start >= end){
     return arr;
    }
    quickSort(arr, start, pivotIndex);
    quickSort(arr, pivotIndex + 1, end);  
    return arr;
  };
console.log(quickSort([8,6,4,1,9,3,5,2]));
display.write(quickSort([8,6,4,1,9,3,5,2]));