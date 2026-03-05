import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SiahSoftComponent } from './siah-soft.component';

describe('SiahSoftComponent', () => {
  let component: SiahSoftComponent;
  let fixture: ComponentFixture<SiahSoftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SiahSoftComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SiahSoftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
