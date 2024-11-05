import { makeAutoObservable } from "mobx";

class FilmModel {
  id: string;
  title: string;

  constructor(id: string, title: string) {
    makeAutoObservable(this, {}, { autoBind: true });
    this.id = id;
    this.title = title;
  }
}

export default FilmModel;
