import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import { getImagesByQuery } from './js/pixabay-api';

import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
} from './js/render-functions';

const queryForm = document.querySelector('.form');

iziToast.settings({
  position: 'topRight',
});

queryForm.addEventListener('submit', event => {
  event.preventDefault();
  const userQuery = event.currentTarget.elements['search-text'].value.trim();

  clearGallery();
  showLoader();

  if (userQuery === '') {
    event.currentTarget.elements['search-text'].value = '';
    iziToast.error({
      title: 'Error',
      message: 'Your query is empty, enter the query text in search field!',
    });
    hideLoader();
    return;
  }

  getImagesByQuery(userQuery)
    .then(response => {
      const hits = response.data.hits;
      if (hits.length > 0) {
        createGallery(hits);
      } else {
        clearGallery();
        iziToast.error({
          title: 'Error',
          message:
            'Sorry, there are no images matching your search query.Please try again!',
        });
      }
    })
    .catch(() =>
      iziToast.error({
        title: 'Error',
        message: 'Error loading images from the server!',
      })
    )
    .finally(() => hideLoader());

  queryForm.reset();
});
