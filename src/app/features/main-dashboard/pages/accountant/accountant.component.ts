import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-accountant',
  templateUrl: './accountant.component.html',
  styleUrl: './accountant.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AccountantComponent {}
