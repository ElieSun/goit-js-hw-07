import { galleryItems } from "./gallery-items.js";
const galleryListRefs = document.querySelector(".gallery");
const markup = galleryItems.map((img) => {
    return `<a class="gallery__item" href="${img.original}">
    <img class="gallery__image" src="${img.preview}" alt="${img.description}"/>
  </a>`;
  }).join("");
galleryListRefs.innerHTML = markup;
new SimpleLightbox('.gallery a', { captionsData: 'alt', captionDelay: 250 });




