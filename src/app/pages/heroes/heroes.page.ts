import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonContent, IonHeader, IonToolbar, IonTitle } from '@ionic/angular/standalone';
import { Router } from '@angular/router';
import { RouterLink } from '@angular/router';

import { Comic } from '../../services/comic.service';

@Component({
  selector: 'app-heroes',
  standalone: true,
  templateUrl: './heroes.page.html',
  styleUrls: ['./heroes.page.scss'],
  imports: [
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule, RouterLink
  ]
})
export class HeroesPage implements OnInit {
  comics: any[] = [];
  loading = true;

  constructor(private comic: Comic, private router: Router) {}

  ngOnInit() {
    this.comic.getComics().subscribe(data => {
      this.comics = data;
      this.loading = false;
    });
  }

  openDetail(id: number) {
    this.router.navigate(['/hero-detail', id]);
  }
}
