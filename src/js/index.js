import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import Notiflix from 'notiflix';
import { galleryEl, formEl, inputEl, loadMoreBtnEl } from './ref';
import fetchPhotos from './fetchData';
import checkResponse from './checkResponse';
const axios = require('axios').default;
const debounce = require('lodash.debounce');

const DEBOUNCE_DELAY = 300;
let value = 0;

inputEl.addEventListener('input', debounce(onInputData, DEBOUNCE_DELAY));
formEl.addEventListener('submit', onClickLoadPhoto);

function onInputData(event) {
  value = event.target.value.toLowerCase().trim();
  return value;
}

function onClickLoadPhoto(event) {
  event.preventDefault();

  if (!value) {
    return;
  }

  fetchPhotos(value)
    .then(checkResponse)
    .catch(error => console, log(error));
}
