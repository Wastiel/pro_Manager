import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuProjetosComponent } from './menu-projetos.component';

describe('MenuProjetosComponent', () => {
  let component: MenuProjetosComponent;
  let fixture: ComponentFixture<MenuProjetosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MenuProjetosComponent]
    });
    fixture = TestBed.createComponent(MenuProjetosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
