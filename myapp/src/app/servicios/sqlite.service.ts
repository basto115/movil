import { Injectable } from '@angular/core';
import { SQLite, SQLiteObject } from '@awesome-cordova-plugins/sqlite/ngx';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class DatabaseService {
  private database!: SQLiteObject;
  private fallbackStorage: Record<string, User> = {}; // Usando el modelo User

  constructor(private sqlite: SQLite) {
    this.initDB(); 
  }

  private isCordovaAvailable(): boolean {
    return !!window.cordova; // Verifica si Cordova está disponible
  }

  async initDB() {
    if (!this.isCordovaAvailable()) {
      console.warn('Cordova no está disponible. Usando IndexedDB como fallback.');
      return;
    }

    try {
      this.database = await this.sqlite.create({
        name: 'mydatabase.db',
        location: 'default',
      });
      console.log('Base de datos SQLite inicializada');
      await this.createTables();
      console.log('Tablas creadas correctamente');
    } catch (error) {
      console.error('Error inicializando la base de datos:', error);
    }
  }

  async createTables() {
    if (!this.database) {
      console.warn('Usando almacenamiento de fallback, no se crean tablas.');
      return;
    }

    try {
      await this.database.executeSql(
        `CREATE TABLE IF NOT EXISTS users (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          username TEXT,
          email TEXT,
          password TEXT,
          fecha_nacimiento TEXT,
          rut TEXT
        );`,
        []
      );
      console.log('Tabla "users" creada o verificada');
    } catch (error) {
      console.error('Error creando las tablas:', error);
    }
  }

  async addUser(user: User) {
    if (!this.database) {
      console.warn('SQLite no disponible. Guardando usuario en almacenamiento de fallback.');
      this.fallbackStorage[user.email] = user;
      console.log('Usuario guardado en IndexedDB simulada.');
      return;
    }

    return this.database.executeSql(
      `INSERT INTO users (username, email, password, fechaNacimiento, rut) VALUES (?, ?, ?, ?, ?)`,
      [user.username, user.email, user.password, user.fechaNacimiento, user.rut]
    );
  }

  async getUsers(): Promise<User[]> {
    if (!this.database) {
      console.warn('SQLite no disponible. Obteniendo usuarios del almacenamiento de fallback.');
      return Object.values(this.fallbackStorage);
    }

    try {
      const data = await this.database.executeSql(`SELECT * FROM users`, []);
      const users: User[] = [];
      for (let i = 0; i < data.rows.length; i++) {
        users.push(data.rows.item(i));
      }
      return users;
    } catch (error) {
      console.error('Error obteniendo los usuarios:', error);
      return [];
    }
  }
}