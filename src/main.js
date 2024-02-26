


import './js/render-functions';
import { submitSearch } from './js/pixabay-api';

const searchForm = document.querySelector('.searchForm');

searchForm.addEventListener('submit', function (event) {
  event.preventDefault();
  submitSearch();
});