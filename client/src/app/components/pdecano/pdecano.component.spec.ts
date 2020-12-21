import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PdecanoComponent } from './pdecano.component';

describe('PdecanoComponent', () => {
  let component: PdecanoComponent;
  let fixture: ComponentFixture<PdecanoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PdecanoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PdecanoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
