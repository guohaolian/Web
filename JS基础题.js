const obj = {
  name: "小明",
  greet: () => {
    console.log(`你好，${this.name}`);
  },
};

obj.greet(); // 你好，undefined
