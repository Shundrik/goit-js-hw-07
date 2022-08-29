import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const galleryRef = document.querySelector(".gallery");
// galleryRef.addEventListener("click",)

function createImage(galleryItems) {
  return galleryItems
    .map((e) => {
      // console.log(e.preview);
      return `<div class="gallery__item">
      <a
        class="gallery__link"
        href="${e.original}">
        <img
        class="gallery__image"
        src="${e.preview}"
        data-source="${e.original}"
        alt="${e.description}"
        loading="lazy"
        ></img>
        </a> </div>`;
    })
    .join(" ");
}

const galleryCreate = createImage(galleryItems);
galleryRef.insertAdjacentHTML("beforeEnd", galleryCreate);

galleryRef.addEventListener("click", openImgClick);

function openImgClick(e) {
  e.preventDefault();

  const isImgOpen = e.target.dataset.source;

  if (!isImgOpen) {
    return;
  }

  const instance = basicLightbox.create(`
            <img src="${isImgOpen}" width="800" height="600">
        `);

instance.show(() => {
            window.addEventListener('keydown', logKey);
            window.addEventListener('click', logKey);
          });
        
function logKey(e){
  if(e.key !== "Escape"){
    return;
  }
  instance.close();
  window.removeEventListener('keydown', logKey);
  window.removeEventListener('click', logKey);
  };

}
