import express from 'express'
import newsRouter from './routers/news'

const app = express();
const port = 8000;

app.use('/news', newsRouter);

app.listen(port, () => {
  console.log(`server started on ${port} port`);
});