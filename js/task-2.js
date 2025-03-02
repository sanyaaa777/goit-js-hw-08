const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
  {
    url: "https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg",
    alt: "Alpine Spring Meadows",
  },
  {
    url: "https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg",
    alt: "Nature Landscape",
  },
  {
    url: "https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg",
    alt: "Lighthouse Coast Sea",
  }
];

const galleryList = document.querySelector('.gallery');
galleryList.classList.add('gallery-flex');

galleryList.style.display = 'flex';
galleryList.style.justifyContent = 'center';
galleryList.style.flexWrap = 'wrap';
galleryList.style.gap = '20px';

galleryList.insertAdjacentHTML(
  'beforeend',
  images.map(({ url, alt }) => `<li class="gallery-item" style="list-style: none;"><img src="${url}" alt="${alt}" class="gallery-img" style="transition: transform 0.5s;"></li>`).join('')
);