import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { DatabaseService } from './servicios/sqlite.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private dbService: DatabaseService
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.dbService.initDB();
    });
  }
}