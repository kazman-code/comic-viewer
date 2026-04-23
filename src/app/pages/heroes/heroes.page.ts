import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonToolbar, IonTitle, IonSearchbar, IonCard, IonItem, IonAvatar, IonLabel } from '@ionic/angular/standalone';
import { Router } from '@angular/router';
import { RouterLink } from '@angular/router';

import { Comic } from '../../services/comic.service';

@Component({
  selector: 'app-heroes',
  standalone: true,
  templateUrl: './heroes.page.html',
  styleUrls: ['./heroes.page.scss'],
  imports: [
    IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, RouterLink, FormsModule, IonSearchbar, IonCard, IonItem, IonAvatar, IonLabel ]
})
export class HeroesPage implements OnInit {
  comics: any[] = [];
  loading = true;
  allComics: any[] = [];
  filteredComics: any[] = [];
  searchTerm = '';

  constructor(private comic: Comic, private router: Router) {}

  ngOnInit() {
    this.comic.getComics().subscribe(data => {
      this.allComics = data;
      this.filteredComics = data;
      this.loading = false;
    });
  }

  filterComics() {
  const term = this.searchTerm.toLowerCase();

  this.filteredComics = this.allComics.filter(comic =>
    comic.name.toLowerCase().includes(term)
  );
}


  openDetail(id: number) {
    this.router.navigate(['/hero-detail', id]);
  }
}
