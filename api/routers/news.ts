import express from 'express';
import { NewsMutation } from '../types';
import fileDb from '../fileDb';

const newsRouter = express.Router();

newsRouter.get('/', async (req, res) => {
  const news = await fileDb.getNews();
  return res.json(news);
});

newsRouter.get('/:id', async (req, res) => {
  const { id } = req.params;
  const newsItem = await fileDb.getNewsById(id);

  if (!newsItem) {
    return res.status(404).json({ message: 'News not found' });
  }

  return res.json(newsItem);
});

newsRouter.post('/', async (req, res) => {
  if (!req.body.title || !req.body.content) {
    return res.status(400).send({ "error": "need to fill a title and content" });
  }
  const newsData: NewsMutation = {
    author: req.body.author,
    content: req.body.content,
    news: req.body.news,
  }

  const post = await fileDb.addNews(newsData)

  res.send(post)
});

export default newsRouter;
