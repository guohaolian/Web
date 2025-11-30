let p3 = Promise.resolve(
  new Promise((resolve, reject) => {
    resolve("success");
  })
);
console.log(p3);