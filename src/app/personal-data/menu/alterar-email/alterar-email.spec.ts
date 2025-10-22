import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlterarEmail } from './alterar-email';

describe('AlterarEmail', () => {
  let component: AlterarEmail;
  let fixture: ComponentFixture<AlterarEmail>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlterarEmail]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlterarEmail);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
