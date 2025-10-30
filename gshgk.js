//下面代码输出结果是什么
const obj={
    1:1,
    a:2,
    
};
obj['1']=0;//js添加属性是会把数字类属性提前并按照升序排列，字符串属性是按照添加顺序排列
obj[++obj.a]=obj.a++;
const values=Object.values(obj);
obj[values[1]]=obj.a;
console.log(obj);
