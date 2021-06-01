import axios from 'axios';

const KEY = 'AIzaSyCkex-PBKZCkObq1VCJN9Lo-Z7GFmrig6E';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY,
  },
});
