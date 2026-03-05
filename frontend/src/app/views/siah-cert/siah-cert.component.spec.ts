import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SiahCertComponent } from './siah-cert.component';

describe('SiahCertComponent', () => {
  let component: SiahCertComponent;
  let fixture: ComponentFixture<SiahCertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SiahCertComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SiahCertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
