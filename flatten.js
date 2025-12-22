/* function flatten(arr) {
  let result = [];
  for (let item of arr) {
    if (Array.isArray(item)) {
      result = result.concat(flatten(item));
    } else {
      result.push(item);
    }
  }
  return result;
}

console.log(flatten([1, [2, 3, [4, 5], 6], 7]));
 */

/* function flatten(arr, depth = 1) {
  let result = [];

  for (let item of arr) {
    // 只有当 item 是数组 且 depth > 0 时才继续展开
    if (Array.isArray(item) && depth > 0) {
      result = result.concat(flatten(item, depth - 1));
    } else {
      result.push(item);
    }
  }

  return result;
}

// 测试
console.log(flatten([1, [2, 3, [4, 5], 6], 7], 1)); // 只展开一层
console.log(flatten([1, [2, 3, [4, 5], 6], 7], 2)); // 展开两层
console.log(flatten([1, [2, 3, [4, 5], 6], 7], Infinity)); // 展开所有层
 */

const list = [
  { id: 1, name: "Root" },
  { id: 2, parentId: 1, name: "Child 1" },
  { id: 3, parentId: 1, name: "Child 2" },
  { id: 4, parentId: 2, name: "Grandchild 1" },
  { id: 5, parentId: 2, name: "Grandchild 2" },
  { id: 6, name: "Root 2" },
  { id: 7, parentId: 6, name: "Child 3" },
];

// 将列表转换为树形结构的函数
function buildTree(list) {
  const map = {};
  const roots = [];

  // 创建一个映射表，将每个节点的 ID 映射到节点本身
  list.forEach((item) => {
    map[item.id] = { ...item, children: [] };
  });

  // 遍历列表，构建树
  list.forEach((item) => {
    if (item.parentId === null) {
      // 如果没有父节点，则是根节点
      roots.push(map[item.id]);
    } else {
      // 否则，将当前节点添加到其父节点的 children 数组中
      if (map[item.parentId]) {
        map[item.parentId].children.push(map[item.id]);
      }
    }
  });

  return roots;
}

const tree = buildTree(list);
console.log(JSON.stringify(tree, null, 2));
