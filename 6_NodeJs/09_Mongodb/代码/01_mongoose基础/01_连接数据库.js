//1. 安装 mongoose
//2. 导入 mongoose
const mongoose = require('mongoose');

//设置 strictQuery 为 true
mongoose.set('strictQuery', true);//这一行代码设置了Mongoose的查询行为模式。从Mongoose 6.x版本开始，strictQuery的默认值为true，这意味着在进行查询时，Mongoose会严格遵循你在Schema中定义的字段，忽略查询中未定义的字段，以避免潜在的错误和不一致的数据

//3. 连接 mongodb 服务                        数据库的名称
mongoose.connect('mongodb://127.0.0.1:27017/bilibili');

//4. 设置回调
// 设置连接成功的回调  once 一次   事件回调函数只执行一次
mongoose.connection.once('open', () => {
  console.log('连接成功');
  // app.listen(8080);
});

// 设置连接错误的回调
mongoose.connection.on('error', () => {
  console.log('连接失败');
}); 

//设置连接关闭的回调
/* mongoose.connection.on('close', () => {
  console.log('连接关闭');
});  */

//关闭 mongodb 的连接
// setTimeout(() => {
//   mongoose.disconnect();
// }, 2000)