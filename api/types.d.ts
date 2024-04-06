export interface News {
  id: string;
  content: string;
  datetime: string;
  author: string;
}

export interface NewsMutation {
  news: string;
  author: string;
  content: string;
}