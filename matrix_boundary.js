function matrix_boundaryy(a, m, n){
    for(let i=0;i<m;i++){
        for(j=0;j<n;j++){ 
            if (i == 0){
                a[i][j]*=2}
            else if (i == m-1){
                a[i][j]*=2 }
            else if (j == 0){ 
                a[i][j]*=2}
            else if (j == n-1){ 
                a[i][j]*=2}
            else{
                a[i][j]/=2
            }
        }
    }
for(let i=0;i<m;i++){
    console.log(a[i].join(" "))
}
}
mat= [ [ 2,2,2,2], [ 2,2,2,2 ],[ 2,2,2,2 ], [ 2,2,2,2] ] 
matrix_boundaryy(mat, mat.length,mat[0].length) 