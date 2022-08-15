import createGalleryMarkup from './galleryMarkup';
import Notiflix from 'notiflix';
import { gallery, loadMore } from './refs';

let photoAmount = 40;

export default function checkResult(result) {
  const dataHits = result.data.hits;
  const datatotalHits = result.data.totalHits;
  
  if (dataHits.length !== 0) {
    Notiflix.Notify.success(`Hooray! We found ${datatotalHits} images.`);
    createGalleryMarkup(dataHits);
    checkPhotoAmmount(result);
  } else {
    gallery.innerHTML = '';
    loadMore.classList.add('is-hidden');
    Notiflix.Notify.failure(
      'Sorry, there are no images matching your search query. Please try again.'
    );
  }
}

function checkPhotoAmmount(result) {
  const dataTotalHits = result.data.totalHits;

  if (dataTotalHits > photoAmount) {
    loadMore.classList.remove('is-hidden');
  } else {
    return;
  } 
}

