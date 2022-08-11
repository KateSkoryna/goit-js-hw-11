import createGalleryListMarkup from './renderMarkup';
import Notiflix from 'notiflix';

const checkResponse = async response => {
  const dataObj = await response.data.hits;
  if (dataObj === []) {
    Notiflix.Notify.failure(
      'Sorry, there are no images matching your search query. Please try again.'
    );
  } else {
    const markup = await createGalleryListMarkup(dataObj);
    return markup;
  }
};

export default checkResponse;
