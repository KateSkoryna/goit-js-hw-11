import { loadMoreBtnEl } from './ref';

function checkPhotoAmmount(response) {
  const photoPerPage = 40;
  const dataTotalHits = response.data.totalHits;
  if (dataTotalHits > photoPerPage) {
    loadMoreBtnEl.classList.remove('is-hidden');
  } else {
    loadMoreBtnEl.classList.add('is-hidden');
  }
}

export default checkPhotoAmmount;
