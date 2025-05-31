'use strict';

import axios from 'axios';

const PIXABAY_API_KEY = '50537281-d9f964856e12bb960f966723f';
axios.defaults.baseURL = 'https://pixabay.com/api/';

export function getImagesByQuery(query) {
  return axios.get('', {
    params: {
      key: PIXABAY_API_KEY,
      q: query,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: 'true',
      per_page: 60,
    },
  });
}
