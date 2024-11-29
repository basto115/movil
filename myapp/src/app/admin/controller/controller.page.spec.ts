import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ControllerPage } from './controller.page';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { APIControllerService } from 'src/app/servicios/apicontroller.service';



describe('ControllerPage', () => {
  let component: ControllerPage;
  let fixture: ComponentFixture<ControllerPage>;

  beforeEach( async () => {
   await TestBed.configureTestingModule({
      declarations: [ControllerPage],
      imports: [HttpClientTestingModule],
      providers: [APIControllerService],
    }).compileComponents

    const fixture = TestBed.createComponent(ControllerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
