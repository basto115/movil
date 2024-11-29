import { TestBed } from '@angular/core/testing';

import { AuthenticatorService } from './authenticator.service';
import { IonicStorageModule } from '@ionic/storage-angular';

describe('AuthenticatorService', () => {
  let service: AuthenticatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [IonicStorageModule.forRoot()],
      providers: [AuthenticatorService],
    }).compileComponents();
    service = TestBed.inject(AuthenticatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });


});
