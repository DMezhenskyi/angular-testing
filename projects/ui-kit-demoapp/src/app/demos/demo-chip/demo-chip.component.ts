import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ChipComponent } from 'ui-kit';

@Component({
  standalone: true,
  imports: [ChipComponent],
  template: ` <p class="element-description">Chip Component</p>
    <div class="showcase">
      <h5>Chip Variants:</h5>
      <div class="state">
        <p>Default Chip</p>
        <df-chip value="angular">Angular</df-chip>
      </div>
      <div class="state">
        <p>Removable Chip</p>
        <df-chip value="reactjs" (removed)="onRemove($event)" [removable]="true"
          >ReactJS</df-chip
        >
      </div>
    </div>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DemoChipComponent {
  onRemove(e: ChipComponent<string>) {
    alert(`Removed Chip: ${e.value}`);
  }
}
