const p1=Promise.resolve(1);
const p2=Promise.resolve(p1);
console.log(p1);
console.log(p2);
console.log(p2===p1); // true

function isOdd(num){    
    return num%2!==0;
}
function isOdd(n){
    return n%2===1||n%2===-1;   
}