import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-warehouse',
  templateUrl: './warehouse.component.html',
  styleUrl: './warehouse.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WarehouseComponent {}
