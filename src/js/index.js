import Notiflix from 'notiflix';
import { formEl, inputEl, loadMoreBtnEl } from './ref';
import fetchPhotos from './fetchData';
import createGalleryListMarkup from './renderMarkup';
import checkResponse from './checkResponse';
const debounce = require('lodash.debounce');

const DEBOUNCE_DELAY = 300;
let value = null;
let stepPage = 1;

inputEl.addEventListener('input', debounce(onInputData, DEBOUNCE_DELAY));
formEl.addEventListener('submit', onClickLoadPhoto);

function onInputData(event) {
  value = event.target.value.toLowerCase().trim();
  console.log(value);
  return value;
}

function onClickLoadPhoto(event) {
  event.preventDefault();

  if (!value) {
    Notiflix.Notify.failure(
      'Sorry, there are no images matching your search query. Please try again.'
    );
    return;
  } else {
    fetchPhotos(value, stepPage)
      .then(checkResponse)
      .catch(error => console.log(error));
  }
}

const onClickAddPage = async () => {
  stepPage += 1;
  fetchPhotos(value, stepPage)
    .then(onClickLoadMore)
    .catch(error => console.log(error));
};

loadMoreBtnEl.addEventListener('click', onClickAddPage);

function onClickLoadMore(response) {
  const dataTotalPhoto = response.data.totalHits;
  let totalPages = dataTotalPhoto / 40;

  if (stepPage > totalPages) {
    loadMoreBtnEl.classList.add('is-hidden');
    Notiflix.Notify.success(`Hooray! We found ${dataTotalPhoto} images.`);
  }

  const dataTotalImg = response.data.hits;
  createGalleryListMarkup(dataTotalImg);
}
