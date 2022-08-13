import createGalleryListMarkup from './renderMarkup';
import Notiflix from 'notiflix';
import checkPhotoAmmount from './checkPhotoAmmount';
import { galleryEl } from './ref';

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

export default checkResponse;