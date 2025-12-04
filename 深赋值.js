/* let a = { name: "dtdt" };
const members = [a];
a = null;
console.log(members); */
//使用 JSON.parse(JSON.stringify(obj))
let a = { key: "value", nested: { subKey: "subValue" } };
let b = JSON.parse(JSON.stringify(a)); // 深赋值

b.key = "newKey"; // 修改 b 中的对象属性
b.nested.subKey = "newSubValue"; // 修改 b 中的嵌套对象属性

console.log(a); // 输出: { key: 'value', nested: { subKey: 'subValue' } }
console.log(b); // 输出: { key: 'newKey', nested: { subKey: 'newSubValue' } }

/* // 使用递归函数手动实现深拷贝
function deepCopy(obj) {
  if (obj === null || typeof obj !== "object") {
    return obj;
  }
  if (Array.isArray(obj)) {
    return obj.map(deepCopy);
  }
  const copy = {};
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      copy[key] = deepCopy(obj[key]);
    }
  }
  return copy;
}

let a = { key: "value", nested: { subKey: "subValue" } };
let b = deepCopy(a); // b 是 a 的深拷贝

b.key = "newKey"; // 修改 b 中的对象属性
b.nested.subKey = "newSubValue"; // 修改 b 中的嵌套对象属性

console.log(a); // 输出: { key: 'value', nested: { subKey: 'subValue' } }
console.log(b); // 输出: { key: 'newKey', nested: { subKey: 'newSubValue' } } */
