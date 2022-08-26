import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);
 
const galleryRef = document.querySelector(".gallery");
// galleryRef.addEventListener("click",)
 
function createImage(galleryItems){
    return galleryItems.map((e)=>{
        // console.log(e.preview);
        return `<a
        class="gallery__link"
        href="${e.original}">
        <img
        class="gallery__image"
        srs="${e.preview}"
        data-source="${e.original}"
        alt="${e.description}"
        loading="lazy"
        ></img>
        </a>`;
        }).join(" ");
    }
 
galleryRef.insertAdjacentHTML('afterbegin',createImage(galleryItems));