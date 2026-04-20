import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RoleCardComponent } from '../../../../shared/ui/role-card/role-card.component';
import { SectionHeaderComponent } from '../../../../shared/ui/section-header/section-header.component';

@Component({
  selector: 'app-company-portal-home',
  imports: [RouterLink, RoleCardComponent, SectionHeaderComponent],
  templateUrl: './company-portal-home.component.html',
  styleUrl: './company-portal-home.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CompanyPortalHomeComponent {
  readonly roles = [
    { title: 'رئيس الحسابات', description: 'الاعتمادات والإقفال النهائي', route: '/company-portal/head-accountant' },
    { title: 'أمن الشركة', description: 'إدارة الاشتراكات والمستخدمين', route: '/company-portal/company-security' },
    { title: 'مدير الفرع', description: 'رفع بيانات الفرع', route: '/company-portal/branch-manager' },
    { title: 'محاسب', description: 'مراجعة العمليات المالية', route: '/company-portal/accountant' },
    { title: 'مدير مشتريات', description: 'الشراء والموردون', route: '/company-portal/purchasing-manager' },
  ];
}
