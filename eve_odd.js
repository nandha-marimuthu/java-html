function eve_odd(arr){
    var eve=[];
    var odd=[];
    for(let i=0;i<arr.length;i++){
        if(arr[i]%2===0){
            eve.push(arr[i])
        }
        else{
                odd.push(arr[i])
            }
    }
        odd.sort(function(a, b){return b-a});
        eve.sort(function(a, b){return a-b});
        console.log('eve_ascending',eve,'\nodd_desending',odd) 
}
eve_odd([82,35,67,23,38,92,41,54,63,12,88])