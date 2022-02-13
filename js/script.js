"use strict";

let numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};
let questionOne = prompt('Один из последних просмотренных фильмов?', ''),
    questionTwo = prompt('На сколько оцените его?', '');
