import Notiflix from 'notiflix';
import { gallery, loadMore } from './refs';
import fetchCard from './fetchCard';
import checkResult from './checkResult';
import onClickLoadMore from './onClickLoadMore';

let value = null;
let step = 1;

export default function onClickSubmitBtn(e) {
  e.preventDefault();
  value = e.target.searchQuery.value.toLowerCase().trim();
  if (!value) {
    gallery.innerHTML = '';
    loadMore.classList.add('is-hidden');
    Notiflix.Notify.failure(
      'Sorry, there are no images matching your search query. Please try again.'
    );
    return;
  } else {
    gallery.innerHTML = '';
    fetchCard(value, step)
      .then(checkResult)
      .catch(error => console.log(error));
    
  }
}

async function onClickLoadMoreForPage() {
  step += 1;
  fetchCard(value, step)
    .then(data => onClickLoadMore(data, step))
    .catch(error => console.log(error));
}

export { onClickSubmitBtn, onClickLoadMoreForPage };