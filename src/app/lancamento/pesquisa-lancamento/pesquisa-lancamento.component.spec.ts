import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PesquisaLancamentoComponent } from './pesquisa-lancamento.component';

describe('PesquisaLancamentoComponent', () => {
  let component: PesquisaLancamentoComponent;
  let fixture: ComponentFixture<PesquisaLancamentoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PesquisaLancamentoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PesquisaLancamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
