import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuAtividadeComponent } from './menu-atividade.component';

describe('MenuAtividadeComponent', () => {
  let component: MenuAtividadeComponent;
  let fixture: ComponentFixture<MenuAtividadeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MenuAtividadeComponent]
    });
    fixture = TestBed.createComponent(MenuAtividadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
