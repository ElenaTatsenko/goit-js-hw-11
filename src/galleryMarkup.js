import { gallery} from './refs';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';


export default function createGalleryMarkup(galleryItems) {
  galleryItems.innerHTML = '';
  const markup = galleryItems
    .map(({
      webformatURL,
      largeImageURL,
      tags,
      likes,
      views,
      comments,
      downloads, }) => {
      return `<a class="gallery__link" href="${largeImageURL}"><div class="photo-card">
        <div class="gallery__card">
  <img class="gallery__image" src="${webformatURL}" alt="${tags}" loading="lazy" />
  </div>
  <div class="gallery__info-card">
    <p class="gallery__info-item">
      Likes: ${likes}
    </p>
    <p class="gallery__info-item">
      Views: ${views}
    </p>
    <p class="gallery__info-item">
      Comments: ${comments}
    </p>
    <p class="gallery__info-item">
      Downloads: ${downloads}
    </p>
  </div>
</div></a>`
    })
    .join('');
  gallery.insertAdjacentHTML('beforeend', markup);

  const lightBox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionPosition: 'bottom',
    animationSpeed: 250,
  });

  lightBox.refresh();
}
  

  