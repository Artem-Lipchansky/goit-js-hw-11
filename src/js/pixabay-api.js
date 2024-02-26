
import { renderImages } from './render-functions';

export async function submitSearch(gallery) {
  const searchInput = document.querySelector('.searchInput');
  const query = searchInput.value.trim();
  const loader = document.querySelector('.loader');
  const galleryContainer = document.querySelector('.gallery');

  if (query === '') {
    iziToast.show({
      message: 'Please enter a keyword',
      backgroundColor: 'yellow',
    });
    return Promise.reject('Empty query');
  }

  const apiKey = '42546986-414d01ac2526fb250e7f0e208';
  const apiUrl = `https://pixabay.com/api/?key=${apiKey}&q=${query}&image_type=photo&orientation=horizontal&safesearch=true`;

  loader.style.display = 'inline-block';

  galleryContainer.innerHTML = '';

  try {
    const response = await fetch(apiUrl);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();

    if (data.hits.length === 0) {
      iziToast.error({
        color: '#fafafb',
        backgroundColor: '#ef4040',
        message:
          'Sorry, there are no images matching your search query. Please try again!',
      });
    } else {
      renderImages(data.hits);
    }
  } catch (error) {
    loader.style.display = 'none';
    iziToast.error({
      title: 'Error!',
      message: `An error occurred while fetching data: ${error.message}. Please try again later.`,
    });
  } finally {
    loader.style.display = 'none';
    gallery.refresh();
  }
}