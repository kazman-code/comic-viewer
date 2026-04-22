import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { IonContent, IonHeader, IonToolbar, IonTitle, IonButton, IonCard, IonCardHeader, IonCardTitle, IonCardContent } from '@ionic/angular/standalone';
import { Comic } from '../../services/comic.service';
import { FavouritesService } from '../../services/favourites.service';





@Component({
  selector: 'app-hero-detail',
  standalone: true,
  templateUrl: './hero-detail.page.html',
  styleUrls: ['./hero-detail.page.scss'],
  imports: [ IonHeader, IonToolbar, IonTitle, IonContent, IonButton, CommonModule, IonCard, IonCardHeader, IonCardTitle, IonCardContent ]
})
export class HeroDetailPage implements OnInit {
  hero: any;
  id!: number;
  powerStats: any[] = [];

  constructor(
    private route: ActivatedRoute,
    private api: Comic,
    private favs: FavouritesService
  ) {}

  ngOnInit() {
    this.id = Number(this.route.snapshot.paramMap.get('id'));

    this.api.getComicById(this.id).subscribe(data => {

      this.hero = data;

      this.powerStats = [
      { label: 'Intelligence', value: data.powerstats.intelligence },
      { label: 'Strength', value: data.powerstats.strength },
      { label: 'Speed', value: data.powerstats.speed },
      { label: 'Durability', value: data.powerstats.durability },
      { label: 'Power', value: data.powerstats.power },
      { label: 'Combat', value: data.powerstats.combat }
    ];
      
    });
  }

 toggleFavourite() {
  if (this.favs.isFavourite(this.id)) {
    this.favs.remove(this.id);
  } else {
    this.favs.add(this.hero);
  }
}


  isFavourite() {
    return this.favs.isFavourite(this.id);
  }
}
