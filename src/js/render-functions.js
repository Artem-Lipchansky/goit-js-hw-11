import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const galleryContainer = document.querySelector('.gallery');
const gallery = new SimpleLightbox('.gallery-item');

export function renderImages(images) {
  const fragment = document.createDocumentFragment(); 

  images.forEach(image => {
    const imageCard = document.createElement('div');
    imageCard.classList.add('image-card');

    const webformatURL = image.webformatURL;
    const largeImageURL = image.largeImageURL;
    const likes = image.likes;
    const views = image.views;
    const comments = image.comments;
    const downloads = image.downloads;

    const imageElement = document.createElement('img');
    imageElement.classList.add('img');
    imageElement.src = image.webformatURL;
    imageElement.alt = image.tags;
    imageElement.style.width = '100%';

    const infoElement = document.createElement('div');
    infoElement.classList.add('image-info');

    infoElement.innerHTML = `
      <p class="info-item">Likes:<br>${likes}</p>
      <p class="info-item">Views:<br>${views}</p>
      <p class="info-item">Comments:<br>${comments}</p>
      <p class="info-item">Downloads:<br>${downloads}</p>
    `;

    const linkElement = document.createElement('a');
    linkElement.href = largeImageURL;
    linkElement.classList.add('gallery-item');
    linkElement.style.textDecoration = 'none';

    linkElement.appendChild(imageElement);
    linkElement.appendChild(infoElement);

    imageCard.appendChild(linkElement);
    fragment.appendChild(imageCard); 
  });

  galleryContainer.innerHTML = '';
  galleryContainer.appendChild(fragment); 

  refreshGallery();
}

function refreshGallery() {
  gallery.refresh();
}

export function showError(message) {
  iziToast.error({
    title: 'Error!',
    message: message,
  });
}