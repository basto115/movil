import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class QrCodeService {
  private apiUrl = 'https://api.qr-code-generator.com/v1/create'; // Endpoint de la API
  private apiKey = 'TU_API_KEY'; // Reemplaza con tu clave API

  constructor(private http: HttpClient) {}

  /**
   * Genera un código QR con los datos proporcionados.
   * @param text Texto o datos que quieres convertir a QR.
   * @returns Observable con la respuesta de la API.
   */
  generateQRCode(text: string): Observable<any> {
    const headers = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${this.apiKey}`,
    };

    const body = {
      qr_code_text: text,
      image_format: 'SVG',
      frame_name: 'no-frame',
    };

    return this.http.post(this.apiUrl, body, { headers });
  }
}
