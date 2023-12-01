const express = require('express');
const app = express();
const PORT = process.env.PORT || 4000;


const logger = (req,res,next)=>{
    req.msg = `<br> This message is from logger`;
    next();
}
const auth = (req,res,next)=>{
    if(req.query.username === 'sarim'){
        console.log(req.query.username);
        next();

    }
    else{
        res.send(`access denied for user ${req.query.username}`)
}

}
// const auth = (req, res, next) => {
//     if (req.query && req.query.username === 'sarim') {
//         next();
//     } else {
//         res.send(`Access denied for user ${req.query ? req.query.username : 'undefined'}`);
//     }
// }


app.use(logger);


app.get('/',(req,res)=>{
    res.send(`home page ${req.msg}`)
})

app.get('/login',auth,(req,res)=>{
    res.send(`Dashboard ${req.msg}`)
})

app.listen(PORT,()=>{
    console.log(`Server is listening on http://localhost:${PORT}`)
})