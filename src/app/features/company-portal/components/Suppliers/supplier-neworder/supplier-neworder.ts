import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-supplier-neworder',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './supplier-neworder.html',
  styleUrl: './supplier-neworder.css',
})
export class SupplierNeworder {
  
  // بيانات الطلبات بناءً على الصورة المرفقة
  newOrders = [
    {
      id: 'ORD-5501',
      customerName: 'مطعم هرفي',
      items: [
        { name: 'دجاج طازج', quantity: '200 كجم', unitPrice: '24 ر.س', total: '4,800 ر.س' }
      ],
      deliveryDate: 'غداً 8 ص',
      grandTotal: '4,800'
    },
    {
      id: 'ORD-5500',
      customerName: 'ماكدونالدز السعودية',
      items: [
        { name: 'دجاج مجمد', quantity: '500 كجم', unitPrice: '21 ر.س', total: '10,500 ر.س' }
      ],
      deliveryDate: 'بعد غد',
      grandTotal: '10,500'
    }
  ];

  acceptOrder(orderId: string) {
    console.log('تم قبول الطلب:', orderId);
  }

  rejectOrder(orderId: string) {
    console.log('تم رفض الطلب:', orderId);
  }
}