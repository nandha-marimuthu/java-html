function fib(n){
    if (n<2){
        return n
    }
    return fib(n-1)+fib(n-2)
    // arr=[0,1]
    // for(let i=0;i<n+1;i++){
    // arr.push(arr(n-1)+arr(n-2))
    // }
    // return arr //for printing all the fibonacci numbers of range n

}
fib(8)