function list_check(arr){
    var min= Math.min( ...arr )
    var max=Math.max( ...arr )
      for(let i=min;i<=max;i++){
        if (arr.includes(i)===false){
          console.log(i)
        }
      }
  }
  list_check([1,2,4,6])