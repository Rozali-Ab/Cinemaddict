import {getRandomInteger, getRandomValue} from '../utils.js';
import {FILM_COUNT} from '../const.js';
import {
  NAME_COUNT, MAX_COMMENTS_ON_FILM, GenreCount, Rating,
  AgeRating, Runtime, YearsDuration,
  DaysDuration, names, surnames,
  titles, posters, genres, emotions,
  description, comment, countries,
} from './const.js';

const getDate = () => {
  const date = new Date();

  date.setFullYear(
    date.getFullYear() - getRandomInteger(YearsDuration.MIN, YearsDuration.MAX)
  );

  return date.toISOString();
};

const generateFilm = () => ({
  title: getRandomValue(titles),
  alternativeTitle: getRandomValue(titles),
  totalRating: getRandomInteger(Rating.MIN, Rating.MAX),
  poster: getRandomValue(posters),
  ageRating: getRandomInteger(AgeRating.MIN, AgeRating.MAX),
  director: `${getRandomValue(names)} ${getRandomValue(surnames)}`,
  writers: Array.from({length: NAME_COUNT}, () => `${getRandomValue(names)} ${getRandomValue(surnames)}`),
  actors: Array.from({length: NAME_COUNT}, () => `${getRandomValue(names)} ${getRandomValue(surnames)}`),
  release: {
    date: getDate(),
    releaseCountry: getRandomValue(countries)
  },
  runtime: getRandomInteger(Runtime.MIN, Runtime.MAX),
  genre: Array.from({length: getRandomInteger(GenreCount.MIN, GenreCount.MAX)}, () => getRandomValue(genres)),
  description
});

/*
{
  "id": "0",
  "comments": [
    $Comment.id$, $Comment.id$
  ],
  "film_info": {
    "title": "A Little Pony Without The Carpet",
    "alternative_title": "Laziness Who Sold Themselves",
    "total_rating": 5.3,
    "poster": "images/posters/blue-blazes.jpg",
    "age_rating": 0,
    "director": "Tom Ford",
    "writers": [
      "Takeshi Kitano"
    ],
    "actors": [
      "Morgan Freeman"
    ],
    "release": {
      "date": "2019-05-11T00:00:00.000Z",
      "release_country": "Finland"
    },
    "runtime": 77,
    "genre": [
      "Comedy"
    ],
    "description": "Oscar-winning film, a war drama about two young people, from the creators of timeless classic \"Nu, Pogodi!\" and \"Alice in Wonderland\", with the best fight scenes since Bruce Lee."
  },
  "user_details": {
    "watchlist": false,
    "already_watched": true,
    "watching_date": "2019-04-12T16:12:32.554Z",
    "favorite": false
  }
}
*/
