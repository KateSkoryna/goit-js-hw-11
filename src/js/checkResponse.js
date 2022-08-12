import createGalleryListMarkup from './renderMarkup';
import Notiflix from 'notiflix';
import { galleryEl, loadMoreBtnEl } from './ref';

function checkResponse(response) {
  const dataHits = response.data.hits;
  const totalHits = response.data.totalHits;
  checkPhotoAmmount(response);

  if (dataHits.length !== 0) {
    Notiflix.Notify.success(`Hooray! We found ${totalHits} images.`);
    createGalleryListMarkup(dataHits);
  } else {
    galleryEl.innerHTML = '';
    Notiflix.Notify.failure(
      'Sorry, there are no images matching your search query. Please try again.'
    );
  }
}

function checkPhotoAmmount(response) {
  const photoPerPage = 40;
  const dataTotalHits = response.data.totalHits;

  if (dataTotalHits > photoPerPage) {
    loadMoreBtnEl.classList.remove('is-hidden');
  } else {
    loadMoreBtnEl.classList.add('is-hidden');
  }
}

export default checkResponse;
