import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-supplier-kpi',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './supplier-kpi.html',
  styleUrl: './supplier-kpi.css',
})
export class SupplierKpi {
  
  // بيانات الـ KPIs العلوية مرتبة من اليمين لليسار
  kpis = [
    { 
      id: 1, 
      title: 'طلبات جديدة', 
      value: '3', 
      subtitle: 'تنتظر ردك', 
      colorScheme: 'red', 
      icon: 'cart' 
    },
    { 
      id: 2, 
      title: 'طلبات مقبولة', 
      value: '12', 
      subtitle: 'هذا الأسبوع', 
      colorScheme: 'green', 
      icon: 'check' 
    },
    { 
      id: 3, 
      title: 'إجمالي المبيعات', 
      value: '285K', 
      suffix: 'ر.س', 
      subtitle: 'هذا الشهر', 
      colorScheme: 'purple', 
      icon: 'trend' 
    },
    { 
      id: 4, 
      title: 'العملاء النشطون', 
      value: '18', 
      subtitle: 'مطعم', 
      colorScheme: 'blue', 
      icon: 'users' 
    }
  ];

  // بيانات الطلبات الجديدة
  newOrders = [
    {
      id: 1,
      customerName: 'مطعم هرفي',
      details: 'دجاج طازج — 200 كجم · التسليم: غداً 8 ص',
      value: '4,800'
    },
    {
      id: 2,
      customerName: 'ماكدونالدز السعودية',
      details: 'دجاج مجمد — 500 كجم · التسليم: بعد غد',
      value: '10,500'
    },
    {
      id: 3,
      customerName: 'مطعم الريم',
      details: 'قطع مشكلة — 150 كجم · التسليم: اليوم 6 م',
      value: '3,600'
    }
  ];

  acceptOrder(orderId: number) {
    console.log('تم قبول الطلب رقم:', orderId);
  }

  rejectOrder(orderId: number) {
    console.log('تم رفض الطلب رقم:', orderId);
  }
}