import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonContent, IonHeader, IonToolbar, IonTitle, IonList, IonItem, IonAvatar, IonLabel } from '@ionic/angular/standalone';
import { Comic } from '../../services/comic.service';
import { FavouritesService } from '../../services/favourites.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.page.html',
  styleUrls: ['./favourites.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, IonList, IonItem, IonAvatar, IonLabel]
})
export class FavouritesPage implements OnInit {

  favouriteHeroes: any[] = [];

  constructor(
    private favs: FavouritesService,
    private api: Comic,
    private router: Router
  ) { }

  ngOnInit() {
    const ids = this .favs.getAll();

     ids.forEach(id => {
      this.api.getComicById(id).subscribe(hero => {
        this.favouriteHeroes.push(hero);
      });
    });
  }

   openHero(id: number) {
    this.router.navigate(['/hero-detail', id]);
  }

}
