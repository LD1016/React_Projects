import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID pTXrk2RUgCrTvkjIKRD-rQHUWKJXO9iiNlpruour7LQ',
  },
});
