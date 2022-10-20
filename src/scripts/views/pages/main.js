import RestaurantSource from '../../data/restaurant-source';
import { createMovieItemTemplate } from '../templates/template-creator';

const Main = {
  async render() {
    return `
    <div class="content">
        <h1 class="content__heading post-item__title">Daftar Restaurant</h1>
        <br/>
        <div id="restaurant" class="restaurant">
        </div>
    </div>
      `;
  },

  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
    const restaurant = await RestaurantSource.list();
    console.log(restaurant);
    const moviesContainer = document.querySelector('#restaurant');
    restaurant.forEach((movie) => {
      moviesContainer.innerHTML += createMovieItemTemplate(movie);
    });
  },
};

export default Main;
