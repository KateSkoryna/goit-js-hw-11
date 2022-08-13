import Notiflix from 'notiflix';
import { galleryEl, loadMoreBtnEl } from './ref';
import createGalleryListMarkup from './renderMarkup';
import endlessScroll from './endlessScroll';

function onClickLoadMore(response, step) {
  const dataTotalPhoto = response.data.totalHits;
  const dataTotalImg = response.data.hits;
  let totalPages = dataTotalPhoto / 40;

  if (step > totalPages) {
    loadMoreBtnEl.classList.add('is-hidden');
    Notiflix.Notify.info(
      "We're sorry, but you've reached the end of search results."
    );
  }
  createGalleryListMarkup(dataTotalImg);
  endlessScroll(galleryEl);
}

export default onClickLoadMore;
