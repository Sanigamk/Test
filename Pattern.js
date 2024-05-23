n=7
for(let i=1; i<=n; i++){
 for(let j=1; j<=i; j++){
    if(j==1||j==i||i==n){
    str="*"
    }
else{
    space=" "
}
 }
    console.log(str.repeat(i))
    // console.log(space.repeat((1,i*2)) + str.repeat(1))
}
