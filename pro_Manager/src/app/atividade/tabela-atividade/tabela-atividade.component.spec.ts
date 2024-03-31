import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabelaAtividadeComponent } from './tabela-atividade.component';

describe('TabelaAtividadeComponent', () => {
  let component: TabelaAtividadeComponent;
  let fixture: ComponentFixture<TabelaAtividadeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TabelaAtividadeComponent]
    });
    fixture = TestBed.createComponent(TabelaAtividadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
