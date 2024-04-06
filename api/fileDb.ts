import {promises as fs} from 'fs'
import crypto from 'crypto';
import {News, NewsMutation} from './types';


const filename = './db.json';
let data: News[] = [];

const fileDb = {
  async init() {
    try {
      const fileContents = await fs.readFile(filename)
      data = JSON.parse(fileContents.toString());
    } catch (e) {
      data = [];
    }
  },
  async getNews() {
    const filteredNews = data.sort((firstDate, secondDate) => Date.parse(secondDate.datetime) - Date.parse(firstDate.datetime));
  },

  async addNews(item: NewsMutation) {
      const post: News = {
        id: crypto.randomUUID().toString(),
        ...item,
        datetime: new Date().toISOString(),
    };

    data.push(post);
    await this.save();
    return post;
  },
  async save() {
    await fs.writeFile(filename, JSON.stringify(data, null, 2));
  }
}

export default fileDb;