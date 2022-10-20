import RestaurantFavorite from '../../data/favorite-restaurant-idb';
import { createMovieItemTemplate } from '../templates/template-creator';

const Like = {
  async render() {
    return `
      <div class="content">
        <h2 class="content__heading">Your Liked Movie</h2>
        <div id="movies" class="movies">
        </div>
      </div>
    `;
  },

  async afterRender() {
    const movies = await RestaurantFavorite.getAllRestaurant();
    const moviesContainer = document.querySelector('#movies');
    if (movies != null) {
      movies.forEach((movie) => {
        moviesContainer.innerHTML += createMovieItemTemplate(movie);
      });
    } else {
      moviesContainer.innerHTML = '<div class="restaurant-item__not__found restaurants__not__found">Tidak ada film untuk ditampilkan</div>';
    }
  },

};

export default Like;
