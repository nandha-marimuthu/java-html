function return_factorial(n){
    if(n<3){
        return n
    }
    return n*return_factorial(n-1)
}
    console.log(return_factorial(5))