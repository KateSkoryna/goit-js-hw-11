import { formEl, loadMoreBtnEl } from './ref';
import { onClickLonBtnSubmit, onClickAddPage } from './onClickLonBtnSubmit';

formEl.addEventListener('submit', onClickLonBtnSubmit);
loadMoreBtnEl.addEventListener('click', onClickAddPage);
