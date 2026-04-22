import { ChangeDetectionStrategy, Component, Input, input } from '@angular/core';

@Component({
  selector: 'app-role-card',
  templateUrl: './role-card.component.html',
  styleUrl: './role-card.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RoleCardComponent {
  @Input() title!: string;
@Input() description!: string;
@Input() icon!: string;
@Input() tag!: string;
  
}
