import { Component, OnInit } from '@angular/core';
import { ModalController, Platform, ToastController } from '@ionic/angular';
import { BarcodeScanningModalComponent } from './barcode-scanning-modal.component';
import { LensFacing, BarcodeScanner } from '@capacitor-mlkit/barcode-scanning';
import { Clipboard } from '@capacitor/clipboard';
import { Browser } from '@capacitor/browser';


@Component({
  selector: 'app-qr',
  templateUrl: './qr.page.html',
  styleUrls: ['./qr.page.scss'],
})
export class QrPage implements OnInit {

  segment = 'scan';
  qrText = 'Miau'

  scanResult = '';

  constructor(
  private modalController: ModalController, private platform: Platform,
  private toastController: ToastController
  ) {}



  ngOnInit(): void {

    if(this.platform.is('capacitor')){

      BarcodeScanner.isSupported().then();
      BarcodeScanner.checkPermissions().then();
      BarcodeScanner.removeAllListeners();
    }
  }

  

  async startScan() {
    try {
      const modal = await this.modalController.create({
      component: BarcodeScanningModalComponent,
      cssClass: 'barcode-scanning-modal',
      showBackdrop: false,
      componentProps: { 
        formats: [],
        LensFacing:LensFacing.Back
      }
    });
  
    await modal.present();

    const { data } = await modal.onWillDismiss();

    if (data) {
      this.scanResult = data?.barcode.displayValue;
    }
  } catch (error) {
    console.error('Error al iniciar el escaneo:', error);
  }
}

  


writeToClipboard = async () => {
  await Clipboard.write({
    string: this.scanResult
  });


    const toast = await this.toastController.create({
      message: 'Copiado al portapapeles',
      duration: 1000,
      color: 'tertiary',
      icon: 'clipboard-outline',
      position: 'middle'
    });
    toast.present();
};




 openCapacitorSite = async () => {

  let url = this.scanResult;
  
  if(!['https://'].includes(this.scanResult)) url = 'https://' + this.scanResult 

  await Browser.open({ url });
};
  
isUrl(){
  let regex = /\.(com|net|io|me|crypto|ai)\b/i;
  return regex.test(this.scanResult);
}

}
