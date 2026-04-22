import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FavouritesService {
  private favs: number[] = [];

  getAll() {
    return this.favs;
  }

  isFavourite(id: number) {
    return this.favs.includes(id);
  }

  add(id: number) {
    this.favs.push(id);
  }

  remove(id: number) {
    this.favs = this.favs.filter(x => x !== id);
  }
}

