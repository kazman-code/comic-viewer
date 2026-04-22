import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root'
})
export class FavouritesService {

  private key = 'favourites';
  private favs: any[] = [];

  constructor(private storage: Storage) {
    this.init();
  }

  async init() {
    await (this.storage as any).create();
    const stored = await (this.storage as any).get(this.key);
    if (stored) {
      this.favs = stored;
    }
  }

  getAll() {
    return this.favs;
  }

  async add(hero: any) {
    const exists = this.favs.some((h: any) => h.id === hero.id);
    if (!exists) {
      this.favs.push(hero);
      await (this.storage as any).set(this.key, this.favs);
    }
  }

  async remove(id: number) {
    this.favs = this.favs.filter(h => h.id !== id);
    await (this.storage as any).set(this.key, this.favs);
  }
  
  async clear() {
  this.favs = [];
  await (this.storage as any).set(this.key, []);
}


  isFavourite(id: number) {
    return this.favs.some(h => h.id === id);
  }
}
