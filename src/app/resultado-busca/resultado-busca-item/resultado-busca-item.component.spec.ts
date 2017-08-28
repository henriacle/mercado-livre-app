import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultadoBuscaItemComponent } from './resultado-busca-item.component';

describe('ResultadoBuscaItemComponent', () => {
  let component: ResultadoBuscaItemComponent;
  let fixture: ComponentFixture<ResultadoBuscaItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResultadoBuscaItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultadoBuscaItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
