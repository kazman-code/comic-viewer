import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonCard, IonCardHeader, IonCardTitle, IonCardContent } from '@ionic/angular/standalone';
import { RouterLink } from '@angular/router';
import { Storage } from '@ionic/storage-angular';



@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [ IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonCard, IonCardHeader, IonCardTitle, IonCardContent, RouterLink
  ],
})
export class HomePage {

  constructor(private storage: Storage) {}

  async ngOnInit() {
  await (this.storage as any).create();
  await this.storage.set('test', 'hello');
  const value = await this.storage.get('test');
  console.log('Storage test:', value);
}

}
