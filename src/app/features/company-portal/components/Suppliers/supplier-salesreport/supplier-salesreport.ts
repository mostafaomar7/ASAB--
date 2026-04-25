import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-supplier-salesreport',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './supplier-salesreport.html',
  styleUrl: './supplier-salesreport.css',
})
export class SupplierSalesreport {
  
  selectedMonth: string = 'أكتوبر';
  
  // بيانات الـ KPIs العلوية
  kpis = [
    { 
      id: 1, 
      title: 'إجمالي الإيرادات', 
      value: '285K', 
      suffix: 'ر.س', 
      subtitle: 'أكتوبر', 
      colorScheme: 'purple', 
      icon: 'trend' 
    },
    { 
      id: 2, 
      title: 'الطلبات المقبولة', 
      value: '12', 
      subtitle: 'هذا الشهر', 
      colorScheme: 'green', 
      icon: 'check' 
    },
    { 
      id: 3, 
      title: 'نسبة الالتزام بالتسليم', 
      value: '94%', 
      subtitle: 'في الوقت المحدد', 
      colorScheme: 'blue', 
      icon: 'truck' 
    }
  ];

  // بيانات ملخص الشهر
  monthlySummary = {
    acceptedOrders: 12,
    rejectedOrders: 2,
    avgOrderValue: '21,923',
    topCustomer: 'ماكدونالدز السعودية'
  };

  // بيانات توزيع الإيرادات (مع نسبة مئوية لضبط طول الشريط)
  revenueDistribution = [
    { id: 1, customer: 'ماكدونالدز السعودية', revenue: '104,600', percentage: 85 },
    { id: 2, customer: 'مطعم هرفي', revenue: '62,700', percentage: 55 },
    { id: 3, customer: 'مطعم الريم', revenue: '51,300', percentage: 45 },
    { id: 4, customer: 'فرع النخيل', revenue: '39,900', percentage: 35 },
    { id: 5, customer: 'آخرون', revenue: '26,500', percentage: 20 }
  ];

  exportExcel() {
    console.log('تصدير تقرير شهر', this.selectedMonth);
  }
}