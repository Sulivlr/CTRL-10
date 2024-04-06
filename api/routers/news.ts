import express from 'express';

const newsRouter = express.Router();

newsRouter.get('/', (req, res) => {
  return res.send('List of news is here');
});

newsRouter.get('/:id', (req, res) => {
  return res.send('A sing news will be here');
});

newsRouter.post('/', (req, res) => {
  res.send('create a news');
});

export default newsRouter;