import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WordsInputComponent } from './words-input.component';

describe('WordsInputComponent', () => {
  let component: WordsInputComponent;
  let fixture: ComponentFixture<WordsInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WordsInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WordsInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
