import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import { getImagesByQuery } from './js/pixabay-api';

import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
  showLoadMoreButton,
  hideLoadMoreButton,
  scrollAfterNewImages,
} from './js/render-functions';

const queryForm = document.querySelector('.form');
const loadMoreBtn = document.querySelector('.load-more');
let page = 1;
let totalPages = 0;
let userQuery = '';

iziToast.settings({
  position: 'topRight',
});

queryForm.addEventListener('submit', event => {
  event.preventDefault();
  userQuery = event.currentTarget.elements['search-text'].value.trim();

  clearGallery();
  showLoader();

  if (userQuery === '') {
    event.currentTarget.elements['search-text'].value = '';
    iziToast.error({
      title: 'Error',
      message: 'Your query is empty, enter the query text in search field!',
    });
    hideLoader();
    hideLoadMoreButton();
    return;
  }

  getImagesByQuery(userQuery, page)
    .then(response => {
      const hits = response.data.hits;
      totalPages = Math.ceil(response.data.totalHits / 15);

      if (hits.length > 0) {
        createGallery(hits);
        page++;
        showLoadMoreButton();
      } else {
        clearGallery();
        hideLoadMoreButton();
        iziToast.error({
          title: 'Error',
          message:
            'Sorry, there are no images matching your search query.Please try again!',
        });
      }
    })
    .catch(() => {
      hideLoadMoreButton();
      iziToast.error({
        title: 'Error',
        message: 'Error loading images from the server!',
      });
    })
    .finally(() => hideLoader());

  queryForm.reset();
});

loadMoreBtn.addEventListener('click', event => {
  if (!userQuery) {
    hideLoader();
    return;
  }

  if (page > totalPages) {
    hideLoadMoreButton();
    return iziToast.info({
      message: "We're sorry, but you've reached the end of search results.",
    });
  }

  showLoader();

  getImagesByQuery(userQuery, page)
    .then(response => {
      const hits = response.data.hits;
      if (hits.length > 0) {
        createGallery(hits);
        scrollAfterNewImages();
        page++;
      }
    })
    .catch(() => {
      hideLoadMoreButton();
      iziToast.error({
        title: 'Error',
        message: 'Error loading images from the server!',
      });
    })
    .finally(() => hideLoader());
});
