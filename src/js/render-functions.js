import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

export function renderImages(images) {
  const galleryContainer = document.querySelector('.gallery');

  galleryContainer.innerHTML = '';

  const galleryContent = images.map(image => {
    const webformatURL = image.webformatURL;
    const largeImageURL = image.largeImageURL;
    const tags = image.tags;
    const likes = image.likes;
    const views = image.views;
    const comments = image.comments;
    const downloads = image.downloads;

    return `
      <div class="image-card">
        <a href="${largeImageURL}" class="gallery-item" style="text-decoration: none;">
          <img src="${webformatURL}" alt="${tags}" class="img" style="width: 100%;">
          <div class="image-info">
            <p class="info-item">Likes:<br>${likes}</p>
            <p class="info-item">Views:<br>${views}</p>
            <p class="info-item">Comments:<br>${comments}</p>
            <p class="info-item">Downloads:<br>${downloads}</p>
          </div>
        </a>
      </div>
    `;
  });

  galleryContainer.insertAdjacentHTML('beforeend', galleryContent.join(''));

  refreshGallery();
}

function refreshGallery() {
  const gallery = new SimpleLightbox('.gallery-item');
  gallery.refresh();
}