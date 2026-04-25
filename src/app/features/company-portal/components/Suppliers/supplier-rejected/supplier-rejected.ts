import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-supplier-rejected',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './supplier-rejected.html',
  styleUrl: './supplier-rejected.css',
})
export class SupplierRejected {
  
  totalRejectedCount: number = 2;

  // بيانات الطلبات المرفوضة مطابقة للتصميم
  rejectedOrders = [
    {
      id: 'ORD-5490',
      customerName: 'مطعم الكوخ',
      details: 'دجاج طازج — 300 كجم · رُفض: أمس',
      status: 'مرفوض',
      price: '7,200'
    },
    {
      id: 'ORD-5486',
      customerName: 'فرع الشرقية',
      details: 'قطع مشكلة — 400 كجم · رُفض: قبل يومين',
      status: 'مرفوض',
      price: '9,600'
    }
  ];

  viewReason(orderId: string) {
    console.log('عرض سبب الرفض للطلب رقم:', orderId);
    // هنا ممكن تفتح Modal فيها تفاصيل وسبب الرفض
  }
}