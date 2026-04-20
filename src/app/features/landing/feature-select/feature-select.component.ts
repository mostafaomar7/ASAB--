import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-feature-select',
  imports: [RouterLink],
  templateUrl: './feature-select.component.html',
  styleUrl: './feature-select.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FeatureSelectComponent {}
