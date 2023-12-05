const express = require('express');

const mongoose = require('mongoose')
require('dotenv').config()

const routes = require('./routes/TaskRoute')

const Cors = require('cors')

const app = express();

const PORT = process.env.PORT || 5000;

app.use(express.json())
app.use(Cors())

mongoose.connect(process.env.MONGO_URI)
.then(()=>console.log('MongoDB connected...'))
.catch(err=>console.log(err))

app.use('api',routes)

app.listen(PORT, () => console.log(`Server running on port http://localhost:${PORT}`))

