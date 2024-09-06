import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { ForgotpassComponent } from './forgotpass.component';

describe('ForgotpassComponent', () => {
  let component: ForgotpassComponent;
  let fixture: ComponentFixture<ForgotpassComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ForgotpassComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ForgotpassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
