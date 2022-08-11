import { galleryEl } from './ref';
import Notiflix from 'notiflix';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const createGalleryListMarkup = gallery => {
  gallery.innerHTML = '';

  const markup = gallery
    .map(
      ({
        largeImageURL,
        webformatURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) =>
        `<a class="gallery__link" href="${largeImageURL}"><div class="photo-card">
        <div class="gallery__thumb">
  <img class="gallery__img" src="${webformatURL}" alt="${tags}" loading="lazy" />
  </div>
  <div class="gallery-info__box">
    <p class="gallery-info__item">
      <b>Likes: <br>${likes}</b>
    </p>
    <p class="gallery-info__item">
      <b>Views: <br>${views}</b>
    </p>
    <p class="gallery-info__item">
      <b>Comments: <br>${comments}</b>
    </p>
    <p class="gallery-info__item">
      <b>Downloads:<br> ${downloads}</b>
    </p>
  </div>
</div></a>`
    )
    .join('');

  galleryEl.insertAdjacentHTML('beforeend', markup);

  new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionPosition: 'bottom',
    animationSpeed: 250,
  });

  return galleryEl;
};

export default createGalleryListMarkup;
