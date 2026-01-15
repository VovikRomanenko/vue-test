import type { NewsArticle } from '@/types/news';
import type { User } from '@/types/user';

export const MOCK_USER: User = {
  id: '1',
  firstName: 'Ronnie',
  lastName: 'Radke',
  email: 'test@test.com',
  avatarUrl: 'ronnie-radke-img.png',
};

export const MOCK_NEWS: NewsArticle[] = [
  {
    id: 1,
    image: 'article-1-min.png',
    title: 'Markets on edge as global inflation concerns return',
    shortDescription: 'Investors remain cautious as new economic data revives fears of prolonged inflation and slower global growth.',
    author: 'Eddie Munson',
    publicationDate: '15.12.2025',
  },
  {
    id: 2,
    image: 'article-2-min.png',
    title: 'Tech giants face growing pressure over AI regulation',
    shortDescription: 'Governments worldwide are increasing scrutiny on artificial intelligence, calling for clearer rules and accountability.',
    author: 'Will Buyers',
    publicationDate: '14.12.2025',
  },
  {
    id: 3,
    image: 'article-3-min.png',
    title: 'Healthcare systems adapt to rising demand for mental health support',
    shortDescription: 'Public and private providers are expanding services as awareness and demand continue to grow across multiple regions.',
    author: 'Will Buyers',
    publicationDate: '14.12.2025',
  },
  {
    id: 4,
    image: 'article-4-min.png',
    title: 'Electric vehicle sales slow amid charging infrastructure concerns',
    shortDescription: 'Despite long-term growth, consumers remain hesitant due to limited charging availability and high costs.',
    author: 'Eddie Munson',
    publicationDate: '13.12.2025',
  },
  {
    id: 5,
    image: 'article-5-min.png',
    title: 'Major streaming platforms rethink content strategies',
    shortDescription: 'Media companies are adjusting production and release plans in response to changing viewer habits.',
    author: 'Mike Wheeler',
    publicationDate: '12.12.2025',
  },
  {
    id: 6,
    image: 'article-6-min.png',
    title: 'Severe weather disrupts travel across parts of Europe',
    shortDescription: 'Heavy storms and flooding have caused delays and cancellations, affecting thousands of passengers.',
    author: 'Will Buyers',
    publicationDate: '12.12.2025',
  },
];