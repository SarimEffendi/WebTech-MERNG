const express = require('express');
const app = express();
const PORT = process.env.PORT || 4000;
const indexRoute = require('./routes/index');
const path = require('path')

app.set("views",path.join(__dirname,"views"));
app.set("view engine","vash");
app.use(express.urlencoded({extended:false}));
app.use(express.json());


// app.get('*',(req,res,next)=>{
//     req.msg = "OK"
//     next();
// })





//middleware

app.all('*',(req,res,next)=>{
    req.msg = "OK"
    next();
})

// app.get('/', (req, res) => {
//     res.send(`<b>hello world</b> ${req.msg}`);
// })

app.use('/', indexRoute);

app.listen(PORT, () =>
    console.log(`server is listening on http://localhost:${PORT}`)
);


