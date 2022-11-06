import { galleryItems } from "./gallery-items.js";
// import SimpleLightbox from "simplelightbox";
// Change code below this line
// console.log(galleryItems);
const galleryListRefs = document.querySelector(".gallery");
const markup = galleryItems.map((img) => {
    return `<a class="gallery__item" href="${img.original}">
    <img class="gallery__image" src="${img.preview}" alt="${img.description}" />
  </a>`;
  }).join("");
galleryListRefs.innerHTML = markup;

// galleryListRefs.addEventListener("click", handleOpenModale);

let simpleLightbox = new SimpleLightbox('.gallery a', {});

// function handleOpenModale(event) {
  // event.preventDefault();
  // if (!event.target.classList.contains("gallery__image")) {
  //   return;
  // }
  // simpleLightbox.on('show.simplelightbox', function () {
  //     // Do something…
  // });

  // const instance = simpleLightbox.create(
  //   `<img src="${event.target.dataset.source}" width="800" height="600">`,
  //   { 
  //     onShow: (instance) => {window.addEventListener('keydown', closeModal)}, 
  //     onClose: (instance) => {window.removeEventListener('keydown', closeModal)} 
  // }
  // );
  // function closeModal(event) {
  //   if (event.code === 'Escape') {
  //       instance.close();
  //   }
  // }
  // instance.show();
// }
// console.log(SimpleLightbox);
// new SimpleLightbox('.gallery a', { /* options */ });


