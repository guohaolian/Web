const users=[
    {
        'name':'wang',
        'sex':'男',
        'age':12

    },
    {
        'name':'Li',
        'sex':'男',
        'age':13
    },
    {
        'name':'wang',
        'sex':'女',
        'age':14
    }

]
/* console.log(groupBy(users,'age'));
function groupBy(arr,propname){
    const result={};
    for(let i=0;i<arr.length;i++){
        const item=arr[i];
        const key=item[propname];
        if(!result[key]){
            result[key]=0;
        }
        result[key]++;
    }
    return result;
} */
console.log(groupBy(users,(e)=>(e.age)));
console.log(groupBy(users,(e)=>e.age>18?'成年人':'未成年'));
function groupBy(arr,generaekey){
    const result={};
    for(let i=0;i<arr.length;i++){
        const item=arr[i];
        const key=generaekey(item);
        console.log(key);
        if(!result[key]){
            result[key]=0;
        }
        result[key]++;
    }
    return result;
}