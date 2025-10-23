const list=[1,2,3,4,5];

const callback=item=>{
    item=item+1;
    console.log(item);
}
list.forEach(callback);