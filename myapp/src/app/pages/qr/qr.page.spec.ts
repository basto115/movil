import { ComponentFixture, TestBed } from '@angular/core/testing';
import { QrPage } from './qr.page';
import { IonicModule } from '@ionic/angular'; 


describe('QrPage', () => {
  let component: QrPage;
  let fixture: ComponentFixture<QrPage>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QrPage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(QrPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
