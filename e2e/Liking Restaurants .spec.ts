const assert = require('assert');

Feature('Liking Restaurants');

Scenario('Liking One Restaurant', async ({ I }) => {
  I.amOnPage('/');
  I.seeElement('.post-item__title');
  I.wait(5);
  const firstFilm = locate('.post-item__title a').first();
  const firstFilmTitle = await I.grabTextFrom(firstFilm);
  I.click(firstFilmTitle)

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/like');
  I.seeElement('.post-item');

  const likedFilmTitle = await I.grabTextFrom('.post-item__title');
  assert.strictEqual(firstFilmTitle, likedFilmTitle);
});

Scenario('Unliking One Restaurant', async ({ I }) => {
    I.amOnPage('/');
    I.seeElement('.post-item__title');
    I.wait(5);
    const firstFilm = locate('.post-item__title a').first();
    const firstFilmTitle = await I.grabTextFrom(firstFilm);
    I.click(firstFilmTitle)
  
    I.seeElement('#likeButton');
    I.click('#likeButton');
  
    I.amOnPage('/#/like');
    I.seeElement('.post-item');
  
    const likedFilmTitle = await I.grabTextFrom('.post-item__title');
    assert.strictEqual(firstFilmTitle, likedFilmTitle);

    I.seeElement('.post-item__title');
    const firstFilms = locate('.post-item__title a').first();
    const firstFilmTitles = await I.grabTextFrom(firstFilms);
    I.click(firstFilmTitles);
    
    I.seeElement('#likeButton');
    I.click('#likeButton');
  });
