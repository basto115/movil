import { TestBed } from '@angular/core/testing';
import { StorageService } from './storage.service'; 
import { Storage } from '@ionic/storage-angular'; 
import { IonicStorageModule } from '@ionic/storage-angular'; 

describe('StorageService', () => {
  let service: StorageService;
  let storage: Storage;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [IonicStorageModule.forRoot()], 
      providers: [StorageService]  
    });
    service = TestBed.inject(StorageService);
    storage = TestBed.inject(Storage); 
  });

  it('should be created', () => {
    expect(service).toBeTruthy(); 
  });

  it('should have Storage injected', () => {
    expect(storage).toBeTruthy(); 
  });
});

  
