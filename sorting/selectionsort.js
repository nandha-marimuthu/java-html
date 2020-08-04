function selectionsort(arr){
    for(let i=0;i<arr.length;i++){
        min=i;//assuming the 1st and other respective positions as min
        for(let j=i+1;j<arr.length;j++){
            if (arr[min]>arr[j]){
                min=j;// assigning the smallest element's index to min
            }
        }
        if(min!==i){    //when the first element is not the smallest one then swapping it with the respective element
            temp=arr[i];//swapping arr[i] and arr[min](which is the smallest number in array)
            arr[i]=arr[min];
            arr[min]=temp;
        }
    }
    return arr
}
arr=[8,6,4,1,9,3,5,2]
console.log(selectionsort(arr))