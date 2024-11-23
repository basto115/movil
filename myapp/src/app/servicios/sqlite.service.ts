import { Injectable } from '@angular/core';
import { SQLite, SQLiteObject } from '@awesome-cordova-plugins/sqlite/ngx';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class DatabaseService {
  private database!: SQLiteObject;

  constructor(private sqlite: SQLite) {
    this.initDB(); 
  }

  async initDB() {
    try {
      
      this.database = await this.sqlite.create({
        name: 'mydatabase.db',
        location: 'default',
      });

      console.log('Base de datos inicializada');

      
      await this.createTables();
      console.log('Tablas creadas correctamente');
    } catch (error) {
      console.error('Error inicializando la base de datos:', error);
    }
  }

  async createTables() {
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

  addUser(
    username: string,
    email: string,
    password: string,
    fechaNacimiento: string,
    rut: string
  ) {
    return this.database.executeSql(
      `INSERT INTO users (username, email, password, fecha_nacimiento, rut) VALUES (?, ?, ?, ?, ?)`,
      [username, email, password, fechaNacimiento, rut]
    );
  }

  async getUsers(): Promise<User[]> {
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