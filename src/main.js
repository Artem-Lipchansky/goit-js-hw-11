import { submitSearch } from './js/pixabay-api';
import './js/render-functions';

const searchForm = document.querySelector('.searchForm');

searchForm.addEventListener('submit', function (event) {
  event.preventDefault();
  submitSearch();
});