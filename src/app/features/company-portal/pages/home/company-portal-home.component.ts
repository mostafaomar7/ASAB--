import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-company-portal-home',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './company-portal-home.component.html',
  styleUrl: './company-portal-home.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CompanyPortalHomeComponent {
  // تم تحديث البيانات لتتطابق تماماً مع النصوص والأيقونات في الصورة
  readonly roles = [
    { title: 'أمن الشركة', description: 'إدارة الاشتراك والمستخدمين', icon: '🏢', iconColor: '#a855f7', isSpecial: true, returnUrl: '/company-portal/company-security' },
    { title: 'رئيس الحسابات', description: 'الإشراف والاعتماد النهائي', icon: '👑', iconColor: '#3b82f6', isSpecial: false, returnUrl: '/company-portal/head-accountant' },
    { title: 'محاسب', description: 'مراجعة العمليات المالية', icon: '📘', iconColor: '#06b6d4', isSpecial: false, returnUrl: '/company-portal/accountant' },
    { title: 'مدير فرع', description: 'رفع بيانات الفرع اليومية', icon: '🏪', iconColor: '#10b981', isSpecial: false, returnUrl: '/company-portal/branch-manager' },
    { title: 'مدير مشتريات', description: 'أوامر الشراء والموردين', icon: '🛒', iconColor: '#f97316', isSpecial: false, returnUrl: '/company-portal/purchasing-manager' },
  ];
}