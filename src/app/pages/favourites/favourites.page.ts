import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonContent, IonHeader, IonToolbar, IonTitle, IonList, IonItem, IonAvatar, IonLabel, IonButton } from '@ionic/angular/standalone';
import { FavouritesService } from '../../services/favourites.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.page.html',
  styleUrls: ['./favourites.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, IonList, IonItem, IonAvatar, IonLabel, IonButton]
})
export class FavouritesPage implements OnInit {

  favouriteHeroes: any[] = [];

  constructor(
    private favs: FavouritesService,
    private router: Router
  ) {}

  ngOnInit() {
    this.favouriteHeroes = this.favs.getAll();
  }

  openHero(id: number) {
    this.router.navigate(['/hero-detail', id]);
  }

  async clearAll() {
  await this.favs.clear();
  this.favouriteHeroes = [];
}

}
