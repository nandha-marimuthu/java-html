function insertionsort(arr){
    let length = arr.length;
for (let i = 1; i < length; i++) {
let key = arr[i];
let j = i - 1;
while (j >= 0 && arr[j] > key) {
    arr[j + 1] = arr[j];
    j = j - 1;
}
arr[j + 1] = key;
}
return arr;
}
arr=[8,6,4,1,9,3,5,2]
console.log(insertionsort(arr))