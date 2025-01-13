import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

// Масив зображень
const images = [
  {
    preview: 'path/to/small-image1.jpg',
    original: 'path/to/large-image1.jpg',
    description: 'Image 1'
  },
  {
    preview: 'path/to/small-image2.jpg',
    original: 'path/to/large-image2.jpg',
    description: 'Image 2'
  },
  // Додайте інші зображення за потребою
];

// Отримання контейнера для галереї
const galleryContainer = document.querySelector('.gallery');

// Створення розмітки карток галереї
const galleryMarkup = images.map(({ preview, original, description }) => {
  return `
    <li class="gallery-item">
      <a class="gallery-link" href="${original}">
        <img class="gallery-image" src="${preview}" alt="${description}" />
      </a>
    </li>
  `;
}).join('');

// Вставка розмітки в DOM
galleryContainer.innerHTML = galleryMarkup;

// Ініціалізація SimpleLightbox
const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt', // Виведення підпису з атрибута alt
  captionDelay: 250, // Затримка для підпису
});
