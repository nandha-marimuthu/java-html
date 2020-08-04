function bubblesort(arr){
    for(let i=0;i<arr.length;i++){
        for(let j=0;j<arr.length;j++){
            if (arr[j]>arr[j+1]){
                temp=arr[j+1];//comparing and swapping two consecutive elements in an array
                arr[j+1]=arr[j]
                arr[j]=temp;
                }
               }
            }
            return arr
        }
arr=[4,1,3,5,2]
console.log(bubblesort(arr))