import { ComponentFixture, TestBed } from "@angular/core/testing";
import { ButtonComponent } from "./button.component";
import { DebugElement } from "@angular/core";

describe('ButtonComponent', () => {
  let fixture: ComponentFixture<ButtonComponent>;
  let debugEl: DebugElement;
  
  beforeEach(() => {
    TestBed.configureTestingModule({declarations: [ButtonComponent]})
    TestBed.createComponent(ButtonComponent);
    fixture = TestBed.createComponent(ButtonComponent);
    debugEl = fixture.debugElement;
    fixture.detectChanges();
  });
  it('should test something...', () => {
    expect(true).toBe(true);
  })
})