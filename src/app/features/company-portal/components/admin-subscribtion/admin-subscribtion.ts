import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Stat { title: string; value: string | number; subtitle: string; iconClass: string; icon: string; }
interface Company {
  id: number; name: string; manager: string; location: string; details: string;
  plan: string; planClass: string; status: string; statusClass: string;
  branchesUsed: number; branchesTotal: number; expiry: string;
  revenue: string; actionText: string; actionClass: string; avatar: string; avatarBg: string;
}

@Component({
  selector: 'app-admin-subscribtion',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './admin-subscribtion.html',
  styleUrl: './admin-subscribtion.css',
})
export class AdminSubscribtion {
  // حالة الـ Modal
  isModalOpen = signal<boolean>(false);
  
  // حالة الفورم (اختيار الخطة)
  selectedPlan = signal<string>('أساسي');

  // الفلاتر
  filters = ['الكل', 'أساسي', 'احترافي', 'مؤسسي', 'تجريبي', 'موقوف'];
  activeFilter = signal<string>('الكل');

  // دوال الـ Modal
  openAddModal() { this.isModalOpen.set(true); }
  closeModal() { this.isModalOpen.set(false); }
  selectPlan(plan: string) { this.selectedPlan.set(plan); }

  // بيانات الكروت العلوية (Stats)
  stats = signal<Stat[]>([
    { title: 'شركات نشطة', value: '4', subtitle: 'من إجمالي الشركات', icon: '🏢', iconClass: 'bg-green' },
    { title: 'تجريبي', value: '1', subtitle: 'يحتاج تحويل', icon: '⏳', iconClass: 'bg-blue' },
    { title: 'ينتهي خلال 30 يوم', value: '3', subtitle: 'شركات تحتاج تجديد', icon: '⚠️', iconClass: 'bg-orange' },
    { title: 'الإيراد الشهري', value: '24K', subtitle: 'ر.س من الشركات', icon: '💰', iconClass: 'bg-purple' },
    { title: 'فروع مدارة', value: '60', subtitle: '178 مستخدم', icon: '🏪', iconClass: 'bg-purple-light' },
  ]);

  // بيانات الشركات (محاكية للصورة)
  companies = signal<Company[]>([
    {
      id: 1, name: 'مجموعة التاج للمطاعم', manager: 'محمد الراشد', location: 'الرياض', details: '3 علامة • 8 مطعم • 12 فرع • 31 مستخدم',
      plan: 'احترافي', planClass: 'badge-blue', status: 'نشط', statusClass: 'badge-green',
      branchesUsed: 12, branchesTotal: 20, expiry: '15 يناير 2026', revenue: '4,800', actionText: 'إيقاف', actionClass: 'btn-stop', avatar: '👑', avatarBg: 'bg-grad-purple'
    },
    {
      id: 2, name: 'شركة النخيل للأغذية', manager: 'فهد العتيبي', location: 'جدة', details: '5 علامة • 15 مطعم • 20 فرع • 68 مستخدم',
      plan: 'مؤسسي', planClass: 'badge-purple', status: 'نشط', statusClass: 'badge-green',
      branchesUsed: 20, branchesTotal: 20, expiry: '01 مارس 2026', revenue: '12,000', actionText: 'إيقاف', actionClass: 'btn-stop', avatar: '🌴', avatarBg: 'bg-grad-blue'
    },
    {
      id: 3, name: 'مجموعة البلد للمطاعم', manager: 'سارة الزهراني', location: 'الدمام', details: '2 علامة • 5 مطعم • 7 فرع • 19 مستخدم',
      plan: 'احترافي', planClass: 'badge-blue', status: 'ينتهي قريباً', statusClass: 'badge-orange',
      branchesUsed: 7, branchesTotal: 20, expiry: '10 فبراير 2026', revenue: '4,800', actionText: 'إيقاف', actionClass: 'btn-stop', avatar: '🍔', avatarBg: 'bg-grad-dark'
    },
    {
      id: 4, name: 'شركة المروج للضيافة', manager: 'عبدالله الحربي', location: 'المدينة', details: '1 علامة • 3 مطعم • 3 فرع • 10 مستخدم',
      plan: 'أساسي', planClass: 'badge-gray', status: '7 أيام ويقفل', statusClass: 'badge-red',
      branchesUsed: 3, branchesTotal: 5, expiry: '05 أكتوبر 2025', revenue: '1,990', actionText: 'تفعيل', actionClass: 'btn-activate', avatar: '🌿', avatarBg: 'bg-grad-green'
    }
  ]);

  // دالة لحساب نسبة الـ Progress Bar
  getProgressWidth(used: number, total: number): string {
    return `${(used / total) * 100}%`;
  }
}