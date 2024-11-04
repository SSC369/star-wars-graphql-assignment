class MovieModel {
  director: string;
  id: string;
  openingCrawl: string;
  releaseDate: string;
  title: string;
  edited: string;

  constructor(
    director: string,
    id: string,
    openingCrawl: string,
    releaseDate: string,
    title: string,
    edited: string
  ) {
    this.director = director;
    this.id = id;
    this.openingCrawl = openingCrawl;
    this.releaseDate = releaseDate;
    this.title = title;
    this.edited = edited;
  }
}

export default MovieModel;
