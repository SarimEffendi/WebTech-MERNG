/* eslint-disable @typescript-eslint/no-unused-vars */
import express from 'express';
import indexRouter from './routes/index.js';
const app = express()
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use("/",indexRouter);




app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`)
})