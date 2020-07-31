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
        odd.sort(function(a, b){return b-a});//sorting in ascendingorder
        eve.sort(function(a, b){return a-b});//sorting in descending order
        console.log('eve_ascending',eve,'\nodd_desending',odd) 
    }
eve_odd([78,356776,1111111,23,45,7,5,23,67,23,78,23,76,23,56,12,346,7135,3266])