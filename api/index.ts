import express from 'express'
import newsRouter from './routers/news'
import fileDb from './fileDb'
import cors from 'cors'

const app = express();
const port = 8000;

app.use(cors())
app.use(express.json())
app.use('/news', newsRouter);


const run = async () => {
  await fileDb.init()
  app.listen(port, () => {
    console.log(`server started on ${port} port`);
  });
}

void run();
