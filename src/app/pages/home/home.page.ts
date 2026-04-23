import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonCard, IonCardHeader, IonCardTitle, IonCardContent } from '@ionic/angular/standalone';
import { RouterLink } from '@angular/router';
import { Storage } from '@ionic/storage-angular';
import { Comic } from 'src/app/services/comic.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [ IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonCard, IonCardHeader, IonCardTitle, IonCardContent, RouterLink, CommonModule ],
})
export class HomePage {
  characters: any[] = [];

  constructor(
    private storage: Storage,
    private comic: Comic,
    private router: Router
  ) {}
  

  async ngOnInit() {
  await this.storage.create();
 this.comic.getComics().subscribe(data => {
      this.characters = data.slice(0, 12); // show first 12 characters
    });
  }

  openHero(id: number) {
    this.router.navigate(['/hero-detail', id]);
}

}
