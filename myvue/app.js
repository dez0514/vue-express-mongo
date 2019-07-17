const express = require('express')
const app = express()
const bodyParser = require('body-parser')
//app.js文件......//引入刚才定义的article路由
const article = require('./router/article')
app.use(bodyParser.urlencoded({extended: true}))

app.all('*',(req,res,next)=>{
    res.header("Access-Control-Allow-Credentials", "true");
    res.header("Access-Control-Allow-Origin", req.headers.origin);
    res.header("Access-Control-Allow-Methods", 'PUT,GET,POST,DELETE');
    res.header("Access-Control-Allow-Headers", "Content-Type");
    next();
})

app.use('/api',article) // 这个'/api' 就是接口的前面的部分 此处表示接口地址为 'http://localhost:3000/api/article'

// app.use('/',(req,res) => {
//     res.send('Yo!')
// })
app.listen(3000,() => {  
    console.log('app listening on port 3000.')
})

