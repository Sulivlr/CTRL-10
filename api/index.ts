import express from 'express'
import newsRouter from './routers/news'
import fileDb from './fileDb'

const app = express();
const port = 8000;

app.use('/news', newsRouter);


const run = async () => {
  await fileDb.init()
  app.listen(port, () => {
    console.log(`server started on ${port} port`);
  });
}

void run();
