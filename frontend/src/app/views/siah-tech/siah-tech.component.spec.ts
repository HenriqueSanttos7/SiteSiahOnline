import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SiahTechComponent } from './siah-tech.component';

describe('SiahTechComponent', () => {
  let component: SiahTechComponent;
  let fixture: ComponentFixture<SiahTechComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SiahTechComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SiahTechComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
