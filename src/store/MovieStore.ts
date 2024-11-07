import { makeAutoObservable } from "mobx";

import MovieModel from "../models/MovieModel";

class MovieStore {
  movies: MovieModel[] = [];

  constructor() {
    makeAutoObservable(this, {}, { autoBind: true });
  }

  addMovie(
    director: string,
    id: string,
    openingCrawl: string,
    releaseDate: string,
    title: string,
    edited: string
  ): void {
    this.movies.push(
      new MovieModel(director, id, openingCrawl, releaseDate, title, edited)
    );
  }
}

const movieStore = new MovieStore();

export default movieStore;
