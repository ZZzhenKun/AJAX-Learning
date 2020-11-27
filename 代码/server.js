// 1.引入express
const { response, json, request } = require('express');
const express = require('express');
// 2.创建应用对象
const app = express();
// 3.创建路由规则
// request 是对请求报文的封装
// response 是对响应报文的封装
app.get('/server', (request, response) => {
    // 设置响应头 设置允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*');
    // 设置响应体
    response.send("HELLO AJAX !");
});

// 可以接收任意类型的请求
app.all('/server', (request, response) => {
    // 设置响应头 设置允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*');
    // 响应头
    response.setHeader('Access-Control-Allow-Headers', '*');
    // 设置响应体
    response.send("HELLO AJAX POST!");
});

app.all('/json-server', (request, response) => {
    // 设置响应头 设置允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*');
    // 响应头
    response.setHeader('Access-Control-Allow-Headers', '*');
    // 响应一个数据
    const data = {
        name: 'cqupt -3'
    }
    // 对对象进行字符后转换
    let str = JSON.stringify(data);
    // 设置响应体
    response.send(str);
});

// 针对IE缓存
// app.get('/ie',function(request,response){
//     // 设置响应头 设置允许跨域
//     response.setHeader('Access-Control-Allow-Origin','*');
//     // 设置响应体
//     response.send("HELLO IE 9!");
// }); 
//上面写法等价于下面的写法，
app.get('/ie', (request, response) => {
    // 设置响应头 设置允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*');
    // 设置响应体
    response.send("HELLO IE 7!");
});

// 延迟响应
app.get('/delay', (request, response) => {
    // 设置响应头 设置允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*');
    // 设置响应体
    setTimeout(() => {
        response.send("延迟响应");
    }, 3000);
    // setTimeout (function(){
    //     response.send("延迟响应");
    // },2000);

});

// jsonp服务
app.all('/check-username',(request,response)=>{
    var data={
        exist:1,
        msg:'用户名已经存在'
    };
    // 数据转化为字符串
    var str = JSON.stringify(data);
    // 返回结果
    response.end(`handle(${str})`);
});

// 4.监听端口启动服务
app.listen(8000, () => {
    console.log("服务已经启动， 8000 端口监听中.....");
})           
