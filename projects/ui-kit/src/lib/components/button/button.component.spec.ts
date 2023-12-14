import { ComponentFixture, TestBed } from "@angular/core/testing";
import { ButtonComponent } from "./button.component";
import { DebugElement } from "@angular/core";
import { By } from "@angular/platform-browser";

describe('ButtonComponent', () => {
  let fixture: ComponentFixture<ButtonComponent>;
  let debugEl: DebugElement;
  let el: HTMLElement;
  
  beforeEach(() => {
    TestBed.configureTestingModule({declarations: [ButtonComponent]})
    TestBed.createComponent(ButtonComponent);
    fixture = TestBed.createComponent(ButtonComponent);
    debugEl = fixture.debugElement;
    el = debugEl.nativeElement;
    fixture.detectChanges();
  });
  describe('Appearance state', () => {
    it('should have "solid" appearance by default', () => {
      // expect(el.classes['solid-button']).toBe(true);
      // expect(el.nativeElement.classList.contains('solid-button')).toBe(true);
      expect(el.classList).toContain('solid-button');
    })
    it('should apply proper CSS classes when appearance changes', () => {
      debugEl.componentInstance.appearance = 'stroked';
      fixture.detectChanges();
      expect(el.classList).toContain('stroked-button');
  
      debugEl.componentInstance.appearance = 'solid';
      fixture.detectChanges();
      expect(el.classList).toContain('solid-button');
    })
  })
  describe('Loading state', () => {
    it('should show loader icon in "loading" state', () => {
      debugEl.componentInstance.loading = true;
      fixture.detectChanges();
      let loader = debugEl.query(By.css('[data-testingId="loader"]'));
      expect(loader).not.toBeNull();
  
      debugEl.componentInstance.loading = false;
      fixture.detectChanges();
      loader = debugEl.query(By.css('[data-testingId="loader"]'));
      expect(loader).toBeNull();
    })
  })
})