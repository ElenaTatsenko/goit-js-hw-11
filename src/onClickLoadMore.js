import Notiflix from 'notiflix';
import { loadMore } from './refs';
import createGalleryMarkup from './galleryMarkup';


export default function onClickLoadMore(result, page) {
  const dataHits = result.data.hits;
  const datatotalHits = result.data.totalHits;
  
  let totalPages = datatotalHits / 40;
  

  if (page > totalPages) {
    loadMore.classList.add('is-hidden');
    Notiflix.Notify.info(
      "We're sorry, but you've reached the end of search results."
    );
  }
  createGalleryMarkup(dataHits);

}

