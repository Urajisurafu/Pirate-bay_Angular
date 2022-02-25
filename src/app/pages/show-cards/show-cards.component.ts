import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { ship } from '../../../interfaces/interfaces';
import { find, from } from 'rxjs';

@Component({
  selector: 'show-cards',
  templateUrl: './show-cards.component.html',
  styleUrls: ['./show-cards.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShowCardsComponent {
  private selectedShip: ship | undefined;

  @Input() ships!: ship[];
  @Output() getSelectedShip = new EventEmitter<any>();

  constructor(private changeDetector: ChangeDetectorRef) {}

  refresh() {
    this.changeDetector.detectChanges();
  }

  shipClick(event: any) {
    const div = event.target.closest('.card');

    from(this.ships)
      .pipe(find((ship) => ship.id === Number(div.id)))
      .subscribe((value) => (this.selectedShip = value));
    this.getSelectedShip.emit(this.selectedShip);
  }
}
