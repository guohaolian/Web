function getPermutations(arr, n) {
  const result = [];

  // 辅助函数：递归生成排列
  function backtrack(path, used) {
    if (path.length === n) {
      result.push([...path]); // 保存一个完整排列...是浅拷贝

      return;
    }

    for (let i = 0; i < arr.length; i++) {
      if (used[i]) continue; // 跳过已使用的元素
      used[i] = true;
      path.push(arr[i]);
      backtrack(path, used);
      path.pop();
      used[i] = false;
    }
  }

  backtrack([], Array(arr.length).fill(false));
  return result;
}

// 示例使用：
const arr = [1, 2, 3, 4];
const n = 3;
console.log(getPermutations(arr, n));
