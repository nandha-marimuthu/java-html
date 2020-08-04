function str_check(s1,s2){
    var c=0
    var x=[]
    for(let i=0;i<s1.length;i++){
        for(let j=0;j<s2.length;j++){
            if(s1[i]===s2[j]){
                c=c+1
            }
        }
        while (c===0){
            x.push(s1[i])
            break
    }
         c=0
}console.log('char in s1 which are not in s2 are: '+x.join(" , "))
}
str_check('nandha','balan')