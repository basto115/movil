import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { BarcodeScanningModalComponent } from './barcode-scanning-modal.component';
import { LensFacing } from '@capacitor-mlkit/barcode-scanning';

@Component({
  selector: 'app-qr',
  templateUrl: './qr.page.html',
  styleUrls: ['./qr.page.scss'],
})
export class QrPage implements OnInit {

  segment = 'scan';
  qrText = 'Miau'

  constructor(
  private modalController: ModalController
  ) {}

  async startScan() {
    const modal = await this.modalController.create({
    component: BarcodeScanningModalComponent,
    cssClass: 'barcode-scanning-modal',
    componentProps: { 
      formats: [],
      LensFacing:LensFacing.Back
    }
    });
  
    await modal.present();
  
  }


  


  ngOnInit() {
  }

}
