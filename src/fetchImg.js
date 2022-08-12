const axios = require('axios').default;
const BASE_URL = 'https://pixabay.com';
const KEY = '29216900-862a9e8f9f3ad454828049dde';

export default async function fetchImg(value, step) {
  const response = await axios.get (
    `${BASE_URL}/api/?key=${KEY}=${value}&image_type=photo&orientation=horizontal&safesearch=true&per_page=40&page=${step}`
  );
  return response;
}