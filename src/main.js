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

const getImagesInitQuery = async () => {
  try {
    const { hits, totalHits } = await getImagesByQuery(userQuery, page);

    if (totalHits === 0) {
      handleNoResults();
      return;
    }

    totalPages = Math.ceil(totalHits / 15);

    if (hits.length > 0) {
      createGallery(hits);

      if (page >= totalPages) {
        hideLoadMoreButton();
        iziToast.info({
          message: "We're sorry, but you've reached the end of search results.",
        });
      } else {
        showLoadMoreButton();
      }
      page++;
      queryForm.reset();
    } else {
      clearGallery();
      hideLoadMoreButton();
      iziToast.error({
        title: 'Error',
        message:
          'Sorry, there are no images matching your search query.Please try again!',
      });
    }
  } catch (error) {
    hideLoadMoreButton();
    iziToast.error({
      title: 'Error',
      message: 'Error loading images from the server!',
    });
  } finally {
    hideLoader();
  }
};

const getImagesAppendQuery = async () => {
  try {
    const { hits, totalHits } = await getImagesByQuery(userQuery, page);

    if (totalHits === 0) {
      handleNoResults();
      return;
    }

    totalPages = Math.ceil(totalHits / 15);

    if (hits.length > 0) {
      createGallery(hits);

      scrollAfterNewImages();

      if (page >= totalPages) {
        hideLoadMoreButton();
        iziToast.info({
          message: "We're sorry, but you've reached the end of search results.",
        });
      } else {
        showLoadMoreButton();
      }
      page++;
    }
  } catch (error) {
    hideLoadMoreButton();
    iziToast.error({
      title: 'Error',
      message: 'Error loading images from the server!',
    });
  } finally {
    hideLoader();
  }
};

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

  page = 1;
  totalPages = 0;

  getImagesInitQuery();
});

loadMoreBtn.addEventListener('click', event => {
  hideLoadMoreButton();
  showLoader();

  getImagesAppendQuery();
});

function handleNoResults() {
  clearGallery();
  hideLoadMoreButton();
  iziToast.error({
    title: 'Error',
    message:
      'Sorry, there are no images matching your search query. Please try again!',
  });
}
