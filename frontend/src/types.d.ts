export interface News {
  id: string;
  content: string;
  datetime: string;
  author: string;
  title: string;
}

export type RouteParams = {
  [key: string]: string | undefined;
};

export interface Post {
  title: string;
  content: string;
}