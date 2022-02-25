import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LonelyIslandBayRoutingModule } from './lonely-island-bay-routing.module';

import { LonelyIslandBayComponent } from './lonely-island-bay.component';
import { CardComponent } from '../card/card.component';
import { ShowCardsComponent } from '../show-cards/show-cards.component';

@NgModule({
  declarations: [LonelyIslandBayComponent, CardComponent, ShowCardsComponent],
  imports: [CommonModule, LonelyIslandBayRoutingModule, FormsModule],
})
export class LonelyIslandBayModule {}
