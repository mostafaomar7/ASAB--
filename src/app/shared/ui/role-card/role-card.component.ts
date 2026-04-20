import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'app-role-card',
  templateUrl: './role-card.component.html',
  styleUrl: './role-card.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RoleCardComponent {
  readonly title = input.required<string>();
  readonly description = input<string>('');
  readonly badge = input<string>('');
}
