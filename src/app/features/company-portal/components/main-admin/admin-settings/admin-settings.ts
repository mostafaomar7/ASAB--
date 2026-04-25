import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

// تعريف الـ Types عشان الكود يكون Strictly Typed
interface SettingItem {
  id: string;
  label: string;
  isActive: boolean;
}

interface SettingCategory {
  title: string;
  icon: string;
  items: SettingItem[];
}

@Component({
  selector: 'app-admin-settings',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './admin-settings.html',
  styleUrl: './admin-settings.css',
})
export class AdminSettings {
  // داتا الإعدادات مبنية بـ Signals
  settings = signal<SettingCategory[]>([
    {
      title: 'إعدادات الإشعارات',
      icon: '🔔',
      items: [
        { id: 'notif_1', label: 'إشعارات الاعتماد', isActive: true },
        { id: 'notif_2', label: 'تنبيهات الاشتراك', isActive: true },
        { id: 'notif_3', label: 'تقارير الأداء اليومية', isActive: true },
      ],
    },
    {
      title: 'إعدادات النسخ الاحتياطي',
      icon: '💾',
      items: [
        { id: 'backup_1', label: 'نسخ تلقائي يومي', isActive: true },
        { id: 'backup_2', label: 'نسخ أسبوعي', isActive: true },
        { id: 'backup_3', label: 'تشفير البيانات', isActive: true },
      ],
    },
    {
      title: 'إعدادات الأمان',
      icon: '🔒',
      items: [
        { id: 'sec_1', label: 'المصادقة الثنائية', isActive: true },
        { id: 'sec_2', label: 'مدة الجلسة', isActive: true },
        { id: 'sec_3', label: 'سياسة كلمة المرور', isActive: true },
      ],
    },
    {
      title: 'إعدادات API',
      icon: '🔗',
      items: [
        { id: 'api_1', label: 'اتصال ERP', isActive: true },
        { id: 'api_2', label: 'اتصال بوابة الدفع', isActive: true },
        { id: 'api_3', label: 'واجهة تطبيق الموبايل', isActive: true },
      ],
    },
  ]);

  // دالة لتغيير حالة التوجل
  toggleSetting(categoryIndex: number, itemIndex: number) {
    this.settings.update(currentSettings => {
      // بنعكس الحالة (true -> false والعكس)
      currentSettings[categoryIndex].items[itemIndex].isActive = 
        !currentSettings[categoryIndex].items[itemIndex].isActive;
      return [...currentSettings];
    });
  }
}