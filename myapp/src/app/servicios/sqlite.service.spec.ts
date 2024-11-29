import { TestBed } from '@angular/core/testing';
import { SQLite } from '@awesome-cordova-plugins/sqlite/ngx'; //por si acaso xd
import { DatabaseService } from './sqlite.service';

describe('SqliteService', () => {
  let service: DatabaseService;

  beforeEach(() => {

    TestBed.configureTestingModule({
      providers: [
        DatabaseService,
        SQLite
      ],
    });
    service = TestBed.inject(DatabaseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
