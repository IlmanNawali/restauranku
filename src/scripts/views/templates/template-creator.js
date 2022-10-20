import CONFIG from '../../globals/config';

const createMovieDetailTemplate = (restaurant) => `
  <p class="gambarResto">
  <img class="post-item__thumbnail" alt="${restaurant.name}"
  src="${restaurant.pictureId ? CONFIG.BASE_IMAGE_URL + restaurant.pictureId : 'https://picsum.photos/id/666/800/450?grayscale'}">
  </p>
  <div class="post-item__content">
    <p class="post-item__date">
    <img
      src="./images/location.png" width="15px" alt="location"/>
      ${restaurant.address}, ${restaurant.city} 
    </p>
    <h1 class="post-item__title2">
      <p class='post_title'>${restaurant.name} /<img
      src="./images/rating.png" width="25px" alt="rating"/>${restaurant.rating}</p>
    </h1>
    <p class="post-item__description">
      ${restaurant.description}.
    </p>
  </div>
`;
const createFoodList = (food) => `<li>${food.name}</li> `;

const createDrinkList = (drink) => `<li>${drink.name}</li> `;

const createMenuList = (reviewC) => `
  <li>
  Dari: ${reviewC.name}<br/>
  Review: ${reviewC.review}
  </li>
  `;

const createMovieItemTemplate = (restaurant) => `
<article class="post-item">
  <p class="gambarResto">
  <img class="post-item__thumbnail" alt="${restaurant.name}"
  src="${restaurant.pictureId ? CONFIG.BASE_IMAGE_URL + restaurant.pictureId : 'https://picsum.photos/id/666/800/450?grayscale'}">
  </p>
  <div class="post-item__content">
    <p class="post-item__date">
    <img
      src="./imgIcon/location.png" width="15px" alt="location"/>
    ${restaurant.city} 
    </p>
    <h1 class="post-item__title">
      <a href="/#/detail/${restaurant.id}" class='post_title'>${restaurant.name} /<img
      src="./imgIcon/rating.png" width="25px" alt="rating"/>${restaurant.rating}</a>
    </h1>
    <p class="post-item__description">
      $${restaurant.description}.
    </p>
  </div>
  </article>
  <br/>

`;

const createLikeButtonTemplate = () => `
  <button aria-label="like this movie" id="likeButton" class="like">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this movie" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createMovieItemTemplate,
  createMovieDetailTemplate,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
  createFoodList,
  createMenuList,
  createDrinkList,
};
