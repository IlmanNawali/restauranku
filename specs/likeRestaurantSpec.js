import * as TestFactories from './helpers/testFactories';
import FavoriteRestaurantIdb from '../src/scripts/data/favorite-restaurant-idb';

describe('Liking A Movie', () => {
  const addLikeButtonContainer = () => {
    document.body.innerHTML = '<div id="likeButtonContainer"></div>';
  };
  beforeEach(() => {
    addLikeButtonContainer();
  });
  it('should show the like button when the movie has not been liked before', async () => {
    await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 1 });

    expect(document.querySelector('[aria-label="like this movie"]'))
      .toBeTruthy();
  });
  it('Should not show the unlikr button when the movie has not been liked before', async () => {
    await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 1 });

    expect(document.querySelector('[aria-label="unlike this movie"]'))
      .toBeFalsy();
  });
  it('should be able to like the movie', async () => {
    await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 1 });

    document.querySelector('#likeButton').dispatchEvent(new Event('click'));
    const movie = await FavoriteRestaurantIdb.getRestaurant(1);
    expect(movie).toEqual({ id: 1 });
    FavoriteRestaurantIdb.deleteRestaurant(1);
  });
});
