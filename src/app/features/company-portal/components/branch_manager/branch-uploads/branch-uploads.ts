import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-branch-uploads',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './branch-uploads.html',
  styleUrl: './branch-uploads.css',
})
export class BranchUploads {
  // داتا الكروت مبنية على الحالات المختلفة الموجودة في التصميم
  uploadCards = [
    {
      id: 1,
      title: 'تقرير المبيعات اليومي',
      subtitle: 'POS + التطبيقات',
      isRequired: true,
      deadline: '11:59 م',
      lastUpload: 'أمس 11:23 م',
      statusIcon: 'success', // success, warning, error
      isUploadedToday: false,
      hasErrorBorder: false
    },
    {
      id: 2,
      title: 'جرد المخزون اليومي',
      subtitle: '10 أصناف محددة',
      isRequired: true,
      deadline: '11:59 م',
      lastUpload: 'أمس 10:47 م',
      statusIcon: 'success',
      isUploadedToday: false,
      hasErrorBorder: false
    },
    {
      id: 3,
      title: 'كشف حساب الصندوق',
      subtitle: 'نقدي + مدفوعات',
      isRequired: true,
      deadline: '',
      lastUpload: '13 أكت 09:15 ص',
      statusIcon: 'warning',
      isUploadedToday: true, // دي اللي بتخفي مربع الرفع وتظهر رسالة النجاح
      hasErrorBorder: false
    },
    {
      id: 4,
      title: 'تقرير الهدر والتالف',
      subtitle: 'الأصناف التالفة',
      isRequired: false,
      deadline: '',
      lastUpload: '12 أكت 10:30 ص',
      statusIcon: 'success',
      isUploadedToday: false,
      hasErrorBorder: false
    },
    {
      id: 5,
      title: 'طلبات الشراء',
      subtitle: 'الكميات والأصناف',
      isRequired: true,
      deadline: '02:00 م',
      lastUpload: 'لم تُرفع بعد',
      statusIcon: 'error',
      isUploadedToday: false,
      hasErrorBorder: true // بيعمل بوردر أحمر للكارت
    },
    {
      id: 6,
      title: 'المصروفات اليومية',
      subtitle: 'فواتير + مستندات',
      isRequired: false,
      deadline: '',
      lastUpload: 'أمس 08:55 م',
      statusIcon: 'success',
      isUploadedToday: false,
      hasErrorBorder: false
    }
  ];
}