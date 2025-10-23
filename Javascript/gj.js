let xm={
    name:'小明',
    home:700,
};

let school=[
    {name:'wer',home:3000},
    {name:'asd',home:2000},
    {name:'zxc',home:1000},
];

function sort(arr,info){
    function _dis(p1,p2){
        return Math.abs(p1.home - p2.home);
    }
    return arr.sort((a,b)=>_dis(a,info)-_dis(b,info)).map(it=>({...it,dis:_dis(it,info)}));//当箭头函数要返回一个对象字面量时，必须用圆括号包裹对象。否则 JavaScript 会把 {} 当作函数体的“语句块”来解析，而不是一个对象
}
let res=sort(school,xm);
console.log(res);