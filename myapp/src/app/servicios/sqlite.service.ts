import { Injectable } from '@angular/core';
import { SQLite, SQLiteObject } from '@awesome-cordova-plugins/sqlite/ngx';
import { User } from '../models/user.model';


@Injectable({
  providedIn: 'root',
})
export class DatabaseService {
  private database!: SQLiteObject;

  constructor(private sqlite: SQLite) {
    this.initDB
  }

  async createDatabase() {
    try {
      this.database = await this.sqlite.create({
        name: 'mydatabase.db',
        location: 'default',
      });
      await this.createTables(); 
    } catch (error) {
      console.error('Error creating database:', error);
    }
  }
  
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
      `INSERT INTO users (username, email, password, fechaNacimiento, rut) VALUES (?, ?, ?, ?, ?)`, 
      [username, email, password, fechaNacimiento, rut]
    );
  }

  
  async getUsers(): Promise<User[]> {
    const data = await this.database.executeSql(`SELECT * FROM users`, []);
    const users: User[] = []; 
    for (let i = 0; i < data.rows.length; i++) {
      users.push(data.rows.item(i)); 
    }
    return users;
  }
}