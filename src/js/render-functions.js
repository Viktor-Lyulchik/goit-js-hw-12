'use strict';

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

let galleryLB;

const gallery = document.querySelector('.gallery');
const loader = document.querySelector('.loader');
const loadMoreBtn = document.querySelector('.load-more');

export function createGallery(images) {
  const listHTML = images
    .map(
      ({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) => `<li class="gallery-item">
    <a class="gallery-link" href="${largeImageURL}">
      <img
        class="gallery-image"
        src="${webformatURL}"
        alt="${tags}"
      />
    </a>
    <div class="image-captions">
        <p class="caption-value">
          <b class="caption-header">Likes</b>
          ${likes}
        </p>
        <p class="caption-value">
          <b class="caption-header">Views</b>
          ${views}
        </p>
        <p class="caption-value">
          <b class="caption-header">Comments</b>
          ${comments}
        </p>
        <p class="caption-value">
          <b class="caption-header">Downloads</b>
          ${downloads}
        </p>
    </div>
  </li>`
    )
    .join('');

  gallery.insertAdjacentHTML('beforeend', listHTML);

  reBuildGallery();
}

function reBuildGallery() {
  if (!galleryLB) {
    galleryLB = new SimpleLightbox('.gallery a', {
      captions: true,
      captionPosition: 'bottom',
      captionDelay: 250,
      captionsData: 'alt',
    });
  } else {
    galleryLB.refresh();
  }
}

export function clearGallery() {
  gallery.innerHTML = '';
  reBuildGallery();
}

export function showLoader() {
  loader.style.display = 'block';
}

export function hideLoader() {
  loader.style.display = 'none';
}

export function showLoadMoreButton() {
  loadMoreBtn.style.display = 'block';
}

export function hideLoadMoreButton() {
  loadMoreBtn.style.display = 'none';
}

export function scrollAfterNewImages() {
  const firstCard = document.querySelector('.gallery .gallery-item');

  if (firstCard) {
    const cardHeight = firstCard.getBoundingClientRect().height;

    window.scrollBy({
      top: cardHeight * 2,
      behavior: 'smooth',
    });
  }
}
