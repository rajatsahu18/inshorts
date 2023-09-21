export const categories = [
  {
    code: "",
    pic: "https://img.icons8.com/fluent/96/000000/news.png",
    name: "general",
  },
  {
    code: "",
    pic: "https://img.icons8.com/fluent/96/000000/hard-working.png",
    name: "business",
  },
  {
    code: "",
    pic: "https://img.icons8.com/fluent/96/000000/movie-projector.png",
    name: "entertainment",
  },
  {
    pic: "https://img.icons8.com/fluent/96/000000/stethoscope.png",
    name: "health",
  },
  {
    pic: "https://img.icons8.com/fluent/96/000000/microscope.png",
    name: "science",
  },
  {
    pic: "https://img.icons8.com/fluent/96/000000/trophy.png",
    name: "sports",
  },
  {
    pic: "https://img.icons8.com/fluent/96/000000/artificial-intelligence.png",
    name: "technology",
  },
];

export const country = [
  {
    id: "in",
    code: "in",
    pic: "https://img.icons8.com/fluent/96/000000/news.png",
    name: "India",
  },
  {
    id: "us",
    code: "us",
    pic: "https://img.icons8.com/fluent/96/000000/news.png",
    name: "USA",
  },
  {
    id: "au",
    code: "au",
    pic: "https://img.icons8.com/fluent/96/000000/news.png",
    name: "Australia",
  },
  {
    id: "ru",
    code: "ru",
    pic: "https://img.icons8.com/fluent/96/000000/news.png",
    name: "Russia",
  },
  {
    id: "fr",
    code: "fr",
    pic: "https://img.icons8.com/fluent/96/000000/news.png",
    name: "France",
  },
  {
    id: "in",
    code: "gb",
    pic: "https://img.icons8.com/fluent/96/000000/news.png",
    name: "United Kingdom",
  },
];

export const sources = [
  {
    id: "fox-news",
    name: "Fox News",
    pic: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Fox_News_Channel_logo.svg/768px-Fox_News_Channel_logo.svg.png",
  },
  {
    id: "google-news",
    name: "Google News",
    pic: "https://upload.wikimedia.org/wikipedia/commons/0/0b/Google_News_icon.png",
  },
  {
    id: "bbc-news",
    name: "BBC News",
    pic: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/BBC_News_2019.svg/1200px-BBC_News_2019.svg.png",
  },
  {
    id: "cnn",
    name: "CNN",
    pic: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/CNN_International_logo.svg/640px-CNN_International_logo.svg.png",
  },
];

export const BASE_URL = "https://saurav.tech/NewsAPI/";

export const getNewsAPI = (category, country = 'in') => {
  return `${BASE_URL}/top-headlines/category/${category}/${country}.json`;
};

export const getSourceAPI = (source) => {
  return `${BASE_URL}/everything/${source}.json`;
};
