import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { SidebarComponent } from '../../../features/main-dashboard/components/sidebar/sidebar.component';

@Component({
  selector: 'app-dashboard-shell',
  imports: [RouterOutlet , SidebarComponent],
  templateUrl: './dashboard-shell.component.html',
  styleUrl: './dashboard-shell.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardShellComponent {}
