import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RoleCardComponent } from '../../../../shared/ui/role-card/role-card.component';
import { SectionHeaderComponent } from '../../../../shared/ui/section-header/section-header.component';

@Component({
  selector: 'app-main-dashboard-home',
  imports: [RouterLink, RoleCardComponent, SectionHeaderComponent],
  templateUrl: './main-dashboard-home.component.html',
  styleUrl: './main-dashboard-home.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainDashboardHomeComponent {
  readonly roles = [
    { title: 'المحاسب', description: 'مراجعة القيود اليومية', route: '/main-dashboard/accountant' },
    { title: 'رئيس الحسابات', description: 'الاعتماد النهائي', route: '/main-dashboard/head-accountant' },
    { title: 'أمن النظام', description: 'إدارة المستخدمين والاشتراكات', route: '/main-dashboard/system-security' },
    { title: 'المخزن', description: 'إدارة الأصناف والحركات', route: '/main-dashboard/warehouse' },
    { title: 'مدير المشتريات', description: 'طلبات الشراء والموردين', route: '/main-dashboard/purchasing-manager' },
    { title: 'مدير الفرع', description: 'متابعة الفرع', route: '/main-dashboard/branch-manager' },
  ];
}
