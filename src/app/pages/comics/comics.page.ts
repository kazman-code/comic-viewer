import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonContent, IonHeader, IonToolbar, IonTitle } from '@ionic/angular/standalone';
import { Router } from '@angular/router';
import { Comic } from '../../services/comic';

@Component({
  selector: 'app-comics',
  templateUrl: './comics.page.html',
  styleUrls: ['./comics.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule
  ]
})
export class ComicsPage implements OnInit {
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
    this.router.navigate(['/comic-detail', id]);
  }
}
