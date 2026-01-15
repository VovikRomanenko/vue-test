export type NewsArticle = {
  id: number;
  image: string;
  title: string;
  shortDescription: string;
  author: string;
  publicationDate: string;
};

export type NewsState = {
  news: NewsArticle[];
  isLoading: boolean;
};
