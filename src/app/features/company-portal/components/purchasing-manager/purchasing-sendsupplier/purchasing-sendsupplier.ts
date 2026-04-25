import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-purchasing-sendsupplier',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './purchasing-sendsupplier.html',
  styleUrl: './purchasing-sendsupplier.css',
})
export class PurchasingSendsupplier {
  
  // بيانات الطلبات المرسلة بناءً على الصورة
  sentOrders = [
    {
      id: 1,
      supplierName: 'شركة الدواجن الوطنية',
      timeSent: 'أرسل قبل ساعة',
      status: 'مؤكد',
      statusType: 'confirmed', // للتحكم في لون الـ Badge
      price: '28,400'
    },
    {
      id: 2,
      supplierName: 'مطاحن الملك',
      timeSent: 'أرسل أمس',
      status: 'قيد التحضير',
      statusType: 'preparing',
      price: '14,200'
    },
    {
      id: 3,
      supplierName: 'مزرعة الخير',
      timeSent: 'أرسل قبل يومين',
      status: 'في الطريق',
      statusType: 'shipping',
      price: '32,100'
    }
  ];

  trackOrder(orderId: number) {
    console.log('تتبع الطلب رقم:', orderId);
  }
}