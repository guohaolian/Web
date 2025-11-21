const p1 = Promise.resolve(1);
const p2 = Promise.resolve(p1);
console.log(p1);
console.log(p2);
console.log(p2 === p1); // true
/* 
function isOdd(num){    
    return num%2!==0;
}
function isOdd(n){
    return n%2===1||n%2===-1;   
} */

/* console.log(p1);
const p3=new Promise((resolve,reject)=>{resolve(p1)});//resolve(p1) 已经调用，但 p1 的解析过程还没有被处理，因此 p3 仍然是 pending 状态
console.log(p3); */

/* const p1=Promise.resolve(1);
const p2=Promise.resolve(2).then(()=>{p1});
console.log(p1);
console.log(p2);
p2.then(()=>{
    console.log(1);
}).then(()=>{
    console.log(2);         
}).then(()=>{
    console.log(3);
});
p1.then(()=>{
    console.log(4);
}).then(()=>{
    console.log(5);
}); */
