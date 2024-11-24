import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { QrCodeService } from '../services/qr-code.service'; // Asegúrate de importar el servicio

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {
  user: string | undefined;
  qrCodeData: string = ''; // Texto que el usuario quiere convertir
  qrCodeResult: string = ''; // Resultado del código QR

  constructor(private router: Router, private qrCodeService: QrCodeService) { }

  ngOnInit() {
    const navigation = this.router.getCurrentNavigation();
    const state = navigation?.extras?.state;

    if (state) {
      this.user = state['user'];  
    }
  }

  generateQRCode() {
    if (this.qrCodeData.trim() === '') {
      alert('Por favor, ingresa un texto para generar el código QR.');
      return;
    }

    this.qrCodeService.generateQRCode(this.qrCodeData).subscribe(
      (response) => {
        console.log('Código QR generado:', response);
        this.qrCodeResult = response.qr_code; // Ajusta si el formato de respuesta varía
      },
      (error) => {
        console.error('Error al generar el código QR:', error);
        alert('Hubo un error al generar el código QR.');
      }
    );
  }
}
