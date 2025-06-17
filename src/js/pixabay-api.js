function getImagesByQuery(query) {
  const API_KEY = '50867086-a3d680221e2677e18377c4443';
  const BASE_URL = 'https://pixabay.com/api/';

  const params = new URLSearchParams({
    key: API_KEY,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  });

  return fetch(`${BASE_URL}?${params}`)
    .then(res => {
      if (!res.ok) {
        throw new Error(res.status);
      }
      return res.json();
    })
    .then(data => {
      console.log(data);
      return data;
    })
    .catch(error => {
      console.error(error);
    });
}

const formEl = document.querySelector('.form');
const galleryEl = document.querySelector('.gallery');

formEl.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  const request = event.currentTarget.elements['search-text'].value.trim();
  console.log(request);

  getImagesByQuery(request)
    .then(data => {
      galleryEl.innerHTML = createGallery(data);
    })
    .catch(error => {
      console.log(error);
    });
}

function createGallery(images) {
  return images.hits
    .map(
      ({ likes, views, comments, downloads, webformatURL, tags }) =>
        `
    <li class="image-card">

    <img src="${webformatURL}" alt="${tags}" class="image-icon">

  <div class="image-card-statistic">

    <div class="image-card-statistic-item">
      <h2 class="image-likes image-card-statistic-item-title">Likes</h2>
      <p class="image-card-statistic-item-number">${likes}</p>
    </div>

    <div class="image-card-statistic-item">
      <h2 class="image-views image-card-statistic-item-title">Views</h2>
      <p class="image-card-statistic-item-number">${views}</p>
    </div>

    <div class="image-card-statistic-item">
      <h2 class="image-comments image-card-statistic-item-title">Comments</h2>
      <p class="image-card-statistic-item-number">${comments}</p>
    </div>

    <div class="image-card-statistic-item">
      <h2 class="image-downloads image-card-statistic-item-title">Downloads</h2>
      <p class="image-card-statistic-item-number">${downloads}</p>
    </div>

  </div>

    </li> `
    )
    .join('');
}
