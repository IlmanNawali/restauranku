/* eslint-disable array-callback-return */
import UrlParser from '../../routes/url-parser';
import RestaurantSource from '../../data/restaurant-source';
import {
  createMovieDetailTemplate, createFoodList, createMenuList, createLikeButtonTemplate,
} from '../templates/template-creator';
import LikeButtonInitiator from '../../utils/like-button-initiator';

const Detail = {
  async render() {
    return `
      <div id="movie" class="movie"></div>
      <div class="post-item__content">
        <h2 class="post-item__title post_title2">Daftar Menu Makanan</h2>
        <span id="food" class="post-item__description"></span>
      </div>
      <div class="post-item__content">
        <h2 class="post-item__title post_title2">Daftar Menu Minuman</h2>
        <span id="drink" class="post-item__description"></span>
      </div>
      <div class="post-item__content">
        <h2 class="post-item__title post_title2">Daftar Review Dari Customer</h2>
        <span id="asd" class="post-item__description"></span>
      </div>
      <div id="likeButtonContainer"></div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await RestaurantSource.detailRestaurant(url.id);
    const movieContainer = document.querySelector('#movie');
    movieContainer.innerHTML = createMovieDetailTemplate(restaurant);

    const foodList = document.querySelector('#food');
    restaurant.menus.foods.map((food) => {
      foodList.innerHTML += createFoodList(food);
    });

    const drinkList = document.querySelector('#drink');
    restaurant.menus.drinks.map((drink) => {
      console.log('minum', drink);
      drinkList.innerHTML += createFoodList(drink);
    });

    const menulist = document.querySelector('#asd');
    restaurant.customerReviews.map((reviewC) => {
      console.log('asd', reviewC);
      menulist.innerHTML += createMenuList(reviewC);
    });

    const likeButtonContainer = document.querySelector('#likeButtonContainer');
    likeButtonContainer.innerHTML = createLikeButtonTemplate();

    LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      restaurant: {
        id: restaurant.id,
        name: restaurant.name,
        city: restaurant.city,
        rating: restaurant.rating,
        pictureId: restaurant.pictureId,
        description: restaurant.description,
      },
    });
  },
};

export default Detail;
