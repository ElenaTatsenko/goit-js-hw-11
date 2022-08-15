import { form, loadMore } from './refs';
import { onClickSubmitBtn, onClickLoadMoreForPage } from './onClickSubmitBtn';


form.addEventListener('submit', onClickSubmitBtn);
loadMore.addEventListener('click', onClickLoadMoreForPage);