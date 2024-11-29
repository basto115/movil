import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ControllerPage } from './controller.page';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { APIControllerService } from 'src/app/servicios/apicontroller.service';
import { SQLite } from '@awesome-cordova-plugins/sqlite/ngx';
import { IonicModule } from '@ionic/angular';

// Mock para SQLite
class SQLiteMock {
  create() {
    return Promise.resolve(); 
  }
}

describe('ControllerPage', () => {
  let component: ControllerPage;
  let fixture: ComponentFixture<ControllerPage>;

  beforeEach( async () => {
   await TestBed.configureTestingModule({
      declarations: [ControllerPage],
      imports: [HttpClientTestingModule, IonicModule.forRoot()],
      providers: [
        APIControllerService,
        { provide: SQLite, useClass: SQLiteMock } 
      ],
    }).compileComponents(); 

    const fixture = TestBed.createComponent(ControllerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
