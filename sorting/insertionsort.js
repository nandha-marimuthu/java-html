function insertionsort(arr){
    for(let i=1;i<arr.length;i++){
        checkswap(i,arr)
    }
    return arr
}
function checkswap(i,arr){
    if (arr[i]<arr[i-1]){
        [arr[i],arr[i-1]]=[arr[i-1],arr[i]]
        checkswap(i-1,arr)
    }
}
arr=[8,6,4,1,9,3,5,2]
console.log(insertionsort(arr))