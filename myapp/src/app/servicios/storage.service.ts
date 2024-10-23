import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  private bdd: Storage = new Storage();
  private bddStatus: Promise<void>;

  constructor(private storage: Storage) {
    this.bddStatus = this.onInit();
  }

  // Inicializa la base de datos (BDD)
  private async onInit(): Promise<void> {
    this.bdd = await this.storage.create();
  }

  // Espera hasta que la base de datos esté conectada
  private async ensureBDDConnected(): Promise<void> {
    await this.bddStatus;
  }

  // Obtiene un valor de la base de datos usando una clave
  async get(key: string): Promise<any> {
    await this.ensureBDDConnected();
    return this.bdd.get(key);
  }

  // Establece un valor en la base de datos con la clave proporcionada
  async set(key: string, value: any): Promise<any> {
    await this.ensureBDDConnected();
    return this.bdd.set(key, value);
  }

  // Elimina un valor de la base de datos usando una clave
  async remove(key: string): Promise<void> {
    await this.ensureBDDConnected();
    return this.bdd.remove(key);
  }
}