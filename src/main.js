
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { submitSearch } from './js/pixabay-api';


const gallery = new SimpleLightbox('.gallery-item');

const searchForm = document.querySelector('.searchForm');

searchForm.addEventListener('submit', function (event) {
  event.preventDefault();
  submitSearch(gallery);
});