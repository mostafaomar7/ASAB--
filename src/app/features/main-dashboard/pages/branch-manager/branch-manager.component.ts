import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-branch-manager',
  templateUrl: './branch-manager.component.html',
  styleUrl: './branch-manager.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BranchManagerComponent {}
