import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ItemCardComponent } from './item-card.component';
import { ChipComponent } from '../chip/chip.component';
import { ButtonModule } from '../button/button.module';

@NgModule({
  imports: [CommonModule, ChipComponent, ButtonModule],
  exports: [ItemCardComponent],
  declarations: [ItemCardComponent],
})
export class ItemCardModule {}
