import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-purchasing-manager',
  templateUrl: './purchasing-manager.component.html',
  styleUrl: './purchasing-manager.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PurchasingManagerComponent {}
