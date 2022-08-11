import Notiflix from 'notiflix';
import { galleryEl, formEl, inputEl, loadMoreBtnEl } from './ref';
import fetchData from './fetchData';
import createGalleryListMarkup from './renderMarkup';
import checkResponse from './checkResponse';
const debounce = require('lodash.debounce');

const DEBOUNCE_DELAY = 300;
let value = null;
let stepPage = 1;

inputEl.addEventListener('input', debounce(onInputData, DEBOUNCE_DELAY));
formEl.addEventListener('submit', onClickLonBtnSubmit);

function onInputData(event) {
  value = event.target.value.toLowerCase().trim();
  return value;
}

function onClickLonBtnSubmit(event) {
  event.preventDefault();

  if (!value) {
    galleryEl.innerHTML = '';
    loadMoreBtnEl.classList.add('is-hidden');
    Notiflix.Notify.failure(
      'Sorry, there are no images matching your search query. Please try again.'
    );
    return;
  } else {
    galleryEl.innerHTML = '';
    fetchData(value, stepPage)
      .then(checkResponse)
      .catch(error => console.log(error));
  }
}

const onClickAddPage = async () => {
  stepPage += 1;
  fetchData(value, stepPage)
    .then(onClickLoadMore)
    .catch(error => console.log(error));
};

loadMoreBtnEl.addEventListener('click', onClickAddPage);

function onClickLoadMore(response) {
  const dataTotalPhoto = response.data.totalHits;
  let totalPages = dataTotalPhoto / 40;

  if (stepPage > totalPages) {
    loadMoreBtnEl.classList.add('is-hidden');
    Notiflix.Notify.info(
      "We're sorry, but you've reached the end of search results."
    );
  }

  const dataTotalImg = response.data.hits;
  createGalleryListMarkup(dataTotalImg);
}
