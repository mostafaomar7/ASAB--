import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RoleCardComponent } from '../../../../shared/ui/role-card/role-card.component';
import { SectionHeaderComponent } from '../../../../shared/ui/section-header/section-header.component';

@Component({
  selector: 'app-main-dashboard-home',
  standalone: true,
  imports: [RouterLink, RoleCardComponent, SectionHeaderComponent],
  templateUrl: './main-dashboard-home.component.html',
  styleUrl: './main-dashboard-home.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainDashboardHomeComponent {
  readonly roles = [
    { title: 'أدمن النظام', description: 'إدارة المستخدمين، الاشتراكات، وإعدادات النظام الكاملة', icon: '🧠', tag: 'نظام', returnUrl: '/main-dashboard/system-admin' },
    { title: 'رئيس الحسابات', description: 'الاعتماد النهائي للعمليات والإشراف على أداء المحاسبين', icon: '👑', tag: 'اعتماد نهائي', returnUrl: '/main-dashboard/head-accountant' },
    { title: 'المحاسب', description: 'مراجعة وتدقيق العمليات اليومية من جميع الأفرع المخصصة', icon: '🧮', tag: 'مراجعة يومية', returnUrl: '/main-dashboard/accountant' },
    { title: 'مدير الفرع', description: 'رفع المبيعات اليومية وإدارة موظفي وموردي الفرع', icon: '🏪', tag: 'فرع', returnUrl: '/main-dashboard/branch-manager' },
    { title: 'مدير المشتريات', description: 'تجميع طلبات الشراء والتنسيق مع الموردين', icon: '🛒', tag: 'مشتريات', returnUrl: '/main-dashboard/purchasing-manager' },
    { title: 'المورد', description: 'استلام طلبات التوريد وإدارة الكتالوج والأسعار', icon: '🏭', tag: 'مورد', returnUrl: '/main-dashboard/supplier' },
  ];
}