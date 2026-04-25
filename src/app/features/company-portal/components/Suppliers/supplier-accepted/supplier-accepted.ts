import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-supplier-accepted',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './supplier-accepted.html',
  styleUrl: './supplier-accepted.css',
})
export class SupplierAccepted {
  
  totalOrdersCount: number = 4;
  totalOrdersValue: string = '21,300';

  // بيانات الطلبات المقبولة متطابقة مع التصميم
  acceptedOrders = [
    {
      id: 'ORD-5498',
      customerName: 'مطعم هرفي',
      details: 'دجاج طازج — 200 كجم · قُبل: اليوم 9:15 ص',
      deliveryTime: 'غداً 8 ص',
      status: 'قيد التحضير',
      statusClass: 'badge-preparing', 
      price: '4,800'
    },
    {
      id: 'ORD-5495',
      customerName: 'ماكدونالدز السعودية',
      details: 'دجاج مجمد — 500 كجم · قُبل: أمس 2:30 م',
      deliveryTime: 'اليوم 6 م',
      status: 'في الطريق',
      statusClass: 'badge-shipping',
      price: '10,500'
    },
    {
      id: 'ORD-5491',
      customerName: 'مطعم الريم',
      details: 'قطع مشكلة — 150 كجم · قُبل: قبل يومين',
      deliveryTime: 'اليوم 10 ص',
      status: 'تم التسليم',
      statusClass: 'badge-delivered',
      price: '3,600'
    },
    {
      id: 'ORD-5488',
      customerName: 'فرع النخيل',
      details: 'دجاج طازج — 100 كجم · قُبل: قبل 3 أيام',
      deliveryTime: 'تم',
      status: 'تم التسليم',
      statusClass: 'badge-delivered',
      price: '2,400'
    }
  ];

  exportExcel() {
    console.log('جاري تصدير سجل الطلبات المقبولة إلى ملف Excel...');
  }
}