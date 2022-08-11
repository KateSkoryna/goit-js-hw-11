import { galleryEl, formEl, inputEl, loadMoreBtnEl } from './ref';
const axios = require('axios').default;

const fetchPhotos = async value => {
  const response = await axios.get(
    `https://pixabay.com/api/?key=29183300-4ae58040b754f339761bcd063&q=${value}&image_type=photo&orientation=horizontal&safesearch=true`
  );
  return response;
};

export default fetchPhotos;
