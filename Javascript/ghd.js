function add(...args) {
    let n=args.reduce((a,b)=>a+b,0);
    return function _add(...rest){
        if(rest.length===0){
            return n;
        }
        return add(n,...rest);
    }
    
}
const r1=add(1);
const r2=r1(2);
const r3=r2(3);
const r4=r3();
console.log(r4); // 6


console.log(add(1,2)(3)(4)());