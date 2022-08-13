import Notiflix from 'notiflix';
import { galleryEl, loadMoreBtnEl } from './ref';
import fetchData from './fetchData';
import checkResponse from './checkResponse';
import onClickLoadMore from './onClickLoadMore';

let value = null;
let stepPage = 1;

function onClickLonBtnSubmit(event) {
  event.preventDefault();
  value = event.target.searchQuery.value.toLowerCase().trim();

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

async function onClickAddPage() {
  stepPage += 1;
  fetchData(value, stepPage)
    .then(data => onClickLoadMore(data, stepPage))
    .catch(error => console.log(error));
}

export { onClickLonBtnSubmit, onClickAddPage };
