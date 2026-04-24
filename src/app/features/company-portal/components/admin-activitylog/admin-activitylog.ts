import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Activity {
  id: number;
  title: string;
  subtitle: string;
  tag: string;
  time: string;
  icon: string;
  iconClass: string;
}

@Component({
  selector: 'app-admin-activitylog',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './admin-activitylog.html',
  styleUrl: './admin-activitylog.css',
})
export class AdminActivitylog {
  
  activities = signal<Activity[]>([
    { id: 1, title: 'إضافة مستخدم جديد', subtitle: 'الأدمن', tag: 'مستخدمين', time: '10:30 ص', icon: '👤', iconClass: 'icon-purple' },
    { id: 2, title: 'اعتماد نهائي لـ 45 عملية', subtitle: 'خالد العمري — رئيس الحسابات', tag: 'اعتمادات', time: '10:15 ص', icon: '✅', iconClass: 'icon-green' },
    { id: 3, title: 'تجديد اشتراك مطعم هرفي', subtitle: 'الأدمن', tag: 'اشتراكات', time: '9:45 ص', icon: '💳', iconClass: 'icon-blue' },
    { id: 4, title: 'رفض عملية EXP-0441', subtitle: 'أحمد محمد الشهري', tag: 'رفض', time: '9:30 ص', icon: '✖', iconClass: 'icon-red' },
    { id: 5, title: 'تصدير بيانات ERP', subtitle: 'خالد العمري', tag: 'تصدير', time: '9:00 ص', icon: '🔗', iconClass: 'icon-gray' },
    { id: 6, title: 'تحديث أصناف الجرد اليومي', subtitle: 'أحمد محمد الشهري', tag: 'مخزون', time: '8:45 ص', icon: '📦', iconClass: 'icon-orange' },
    { id: 7, title: 'تعديل صلاحيات دور المحاسب', subtitle: 'الأدمن', tag: 'صلاحيات', time: 'أمس 14:30', icon: '🔑', iconClass: 'icon-yellow' },
    { id: 8, title: 'حذف مستخدم: عمر السعد', subtitle: 'الأدمن', tag: 'مستخدمين', time: 'أمس 11:00', icon: '🗑', iconClass: 'icon-red' },
    { id: 9, title: 'اعتماد طلب شراء PO-8821', subtitle: 'سارة العمري', tag: 'مشتريات', time: 'أمس 09:15', icon: '🛒', iconClass: 'icon-teal' },
  ]);

  // دالة لتصدير الإكسيل (مجرد شكل حالياً)
  exportToExcel() {
    console.log('جاري تصدير السجل إلى Excel...');
  }
}