import { TestBed } from '@angular/core/testing';
import { StorageService } from './storage.service'; // Asegúrate de que la ruta esté correcta
import { Storage } from '@ionic/storage-angular'; // Importa el servicio Storage
import { IonicStorageModule } from '@ionic/storage-angular'; // Importa IonicStorageModule

describe('StorageService', () => {
  let service: StorageService;
  let storage: Storage;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [IonicStorageModule.forRoot()], // Importa IonicStorageModule
      providers: [StorageService]  // Proveemos el servicio que depende de Storage
    });
    service = TestBed.inject(StorageService);
    storage = TestBed.inject(Storage); // Asegúrate de que Storage está inyectado
  });

  it('should be created', () => {
    expect(service).toBeTruthy(); // Verifica que tu servicio se ha creado correctamente
  });

  it('should have Storage injected', () => {
    expect(storage).toBeTruthy(); // Verifica que el servicio Storage fue correctamente inyectado
  });
});

  
