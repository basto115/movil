import { Injectable } from '@angular/core';
import { SQLite, SQLiteObject } from '@awesome-cordova-plugins/sqlite/ngx';

@Injectable({
  providedIn: 'root',
})
export class DatabaseService {
  private database!: SQLiteObject;

  constructor(private sqlite: SQLite) {}

  
  async initDB() {
    try {
      const db = await this.sqlite.create({
        name: 'data.db',
        location: 'default',
      });
      this.database = db;
      return await this.createTables();
    } catch (e) {
      return console.error('Error creando la base de datos', e);
    }
  }

  
  private createTables() {
    return this.database.executeSql(
      `CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        username TEXT,
        email TEXT,
        password TEXT,
        fecha_nacimiento TEXT,
        rut TEXT
      );`, []
    );
  }

  
  addUser(username: string, email: string, password: string, fechaNacimiento: string, rut: string) {
    return this.database.executeSql(
      `INSERT INTO users (username, email, password, fecha_nacimiento, rut) VALUES (?, ?, ?, ?, ?)`, 
      [username, email, password, fechaNacimiento, rut]
    );
  }

  
  getUsers() {
    return this.database.executeSql(`SELECT * FROM users`, []).then(data => {
      const users = [];
      for (let i = 0; i < data.rows.length; i++) {
        users.push(data.rows.item(i));
      }
      return users;
    });
  }
}