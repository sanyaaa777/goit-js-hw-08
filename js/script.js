const galleryContainer = document.querySelector(".gallery");

const galleryMarkup = images
  .map(
    ({ preview, original, description }) =>
      `<li class="gallery-item">
        <a class="gallery-link" href="${original}">
          <img class="gallery-image" src="${preview}" data-source="${original}" alt="${description}" />
        </a>
      </li>`
  )
  .join("");

galleryContainer.innerHTML = galleryMarkup;

galleryContainer.addEventListener("click", (event) => {
  event.preventDefault();

  const clickedImage = event.target;
  if (!clickedImage.classList.contains("gallery-image")) return;

  const imageUrl = clickedImage.dataset.source;

  const instance = basicLightbox.create(
    `<img src="${imageUrl}" width="800" height="600">`
  );

  instance.show();
});
