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

 
  private async onInit(): Promise<void> {
    this.bdd = await this.storage.create();
  }

  
  private async ensureBDDConnected(): Promise<void> {
    await this.bddStatus;
  }

  
  async get(key: string): Promise<any> {
    await this.ensureBDDConnected();
    return this.bdd.get(key);
  }

  
  async set(key: string, value: any): Promise<any> {
    await this.ensureBDDConnected();
    return this.bdd.set(key, value);
  }

  
  async remove(key: string): Promise<void> {
    await this.ensureBDDConnected();
    return this.bdd.remove(key);
  }
}