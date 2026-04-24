import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

interface StatCard { title: string; value: string; icon: string; iconClass: string; }
interface Subscriber {
  id: number; name: string; avatar: string; avatarBg: string; 
  plan: string; planClass: string; status: string; statusClass: string;
  details: string; cardBorderClass: string;
  expiryDate: string; daysLeft: string; daysLeftClass: string;
  progress: number; progressClass: string; showProgress: boolean;
  autoRenew: boolean; actionText: string; actionClass: string;
}

@Component({
  selector: 'app-admin-subscribers',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './admin-subscribers.html',
  styleUrl: './admin-subscribers.css',
})
export class AdminSubscribers {

  // الإحصائيات العلوية
  stats = signal<StatCard[]>([
    { title: 'اشتراكات نشطة', value: '1', icon: '✓', iconClass: 'bg-green' },
    { title: 'تنتهي قريباً', value: '2', icon: '⚠️', iconClass: 'bg-orange' },
    { title: 'منتهية الاشتراك', value: '1', icon: '■', iconClass: 'bg-red' },
    { title: 'إجمالي الفروع', value: '30', icon: '🏠', iconClass: 'bg-purple' },
  ]);

  // قائمة المشتركين
  subscribers = signal<Subscriber[]>([
    {
      id: 1, name: 'مطاعم الريم', avatar: 'ر', avatarBg: 'bg-avatar-purple',
      plan: 'باقة بلاتيني', planClass: 'badge-purple-light', status: 'اشتراك نشط', statusClass: 'badge-green-light',
      details: 'فيصل الريم · 4 مطعم · 8 فرع', cardBorderClass: 'border-green',
      expiryDate: '15 يناير 2027', daysLeft: '307 يوم', daysLeftClass: 'text-gray',
      progress: 20, progressClass: 'prog-green', showProgress: true,
      autoRenew: false, actionText: 'تجديد', actionClass: 'btn-outline-yellow'
    },
    {
      id: 2, name: 'مطاعم هرفي', avatar: 'هـ', avatarBg: 'bg-avatar-orange',
      plan: 'باقة ذهبي', planClass: 'badge-gold-light', status: 'ينتهي قريباً', statusClass: 'badge-orange-light',
      details: 'طلال الحسين · 5 مطعم · 10 فرع', cardBorderClass: 'border-orange',
      expiryDate: '15 مارس 2026', daysLeft: '1 يوم', daysLeftClass: 'text-gray',
      progress: 95, progressClass: 'prog-orange', showProgress: true,
      autoRenew: true, actionText: 'تجديد', actionClass: 'btn-outline-yellow'
    },
    {
      id: 3, name: 'ماكدونالدز السعودية', avatar: 'م', avatarBg: 'bg-avatar-red',
      plan: 'باقة بلاتيني', planClass: 'badge-purple-light', status: 'إنذار انتهاء', statusClass: 'badge-red-light',
      details: 'شركة المطعم العالمي · 4 مطعم · 8 فرع', cardBorderClass: 'border-red-light',
      expiryDate: '21 أبريل 2026', daysLeft: '38 يوم', daysLeftClass: 'text-gray',
      progress: 80, progressClass: 'prog-red', showProgress: true,
      autoRenew: true, actionText: 'تجديد', actionClass: 'btn-outline-yellow'
    },
    {
      id: 4, name: 'بروستد الوطني', avatar: 'ب', avatarBg: 'bg-avatar-green',
      plan: 'باقة فضي', planClass: 'badge-gray-light', status: 'منتهي الاشتراك', statusClass: 'badge-red-light',
      details: 'محمد السعيد · 2 مطعم · 4 فرع', cardBorderClass: 'border-red-solid',
      expiryDate: '9 أكتوبر 2025', daysLeft: 'منتهي 156 يوم', daysLeftClass: 'text-red-bold',
      progress: 0, progressClass: '', showProgress: false,
      autoRenew: true, actionText: 'تفعيل', actionClass: 'btn-solid-red'
    }
  ]);

  // تبديل حالة التجديد التلقائي
  toggleAutoRenew(id: number) {
    this.subscribers.update(subs => {
      const sub = subs.find(s => s.id === id);
      if (sub) sub.autoRenew = !sub.autoRenew;
      return [...subs];
    });
  }
}