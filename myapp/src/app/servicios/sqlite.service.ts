import { Injectable } from '@angular/core';
import { SQLite, SQLiteObject } from '@awesome-cordova-plugins/sqlite/ngx';

@Injectable({
  providedIn: 'root',
})
export class DatabaseService {
  private database!: SQLiteObject;

  constructor(private sqlite: SQLite) {}

  
  initDB() {
    return this.sqlite.create({
      name: 'data.db',
      location: 'default',
    })
    .then((db: SQLiteObject) => {
      this.database = db;
      return this.createTables();
    })
    .catch(e => console.error('Error creando la base de datos', e));
  }

  
  private createTables() {
    return this.database.executeSql(
      `CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT,
        email TEXT
      );`, []
    );
  }

  
  addUser(name: string, email: string) {
    return this.database.executeSql(
      `INSERT INTO users (name, email) VALUES (?, ?)`, [name, email]
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