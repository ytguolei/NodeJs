var fs = require("fs");
// var data = fs.readFileSync('input.txt');
// console.log(data.toString());
// fs.readFile('input.txt', function (err, data) {
//     if (err) return console.error(err);
//     console.log(data.toString());
// });
// var events = require('events');
// var eventEmitter = new events.EventEmitter();
// // 创建事件处理程序
// var connectHandler = function connected() {
//     console.log('连接成功。');
   
//     // 触发 data_received 事件 
//     eventEmitter.emit('data_received');
//  }
// // 绑定 connection 事件处理程序
// eventEmitter.on('connection', connectHandler);

// // 使用匿名函数绑定 data_received 事件
// eventEmitter.on('data_received', function(){
//   console.log('数据接收成功。');
// });

// // 触发 connection 事件 
// eventEmitter.emit('connection');
fs.readFile('input.txt', function (err, data) {
    if (err){
       console.log(err.stack);
       return;
    }
    console.log(data.toString());
 });
 

console.log("程序执行结束!");


