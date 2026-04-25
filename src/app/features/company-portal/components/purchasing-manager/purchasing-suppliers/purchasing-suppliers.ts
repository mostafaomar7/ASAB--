import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-purchasing-suppliers',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './purchasing-suppliers.html',
  styleUrl: './purchasing-suppliers.css',
})
export class PurchasingSuppliers {
  
  totalSpend: string = '270,500';
  
  // بيانات الموردين مطابقة للصورة
  suppliers = [
    {
      id: 1,
      name: 'شركة الدواجن الوطنية',
      initial: 'ش',
      category: 'لحوم ودواجن',
      phone: '0553421100',
      status: 'نشط',
      statusType: 'active', // active, suspended
      rating: 4.8,
      orders: 42,
      monthly: '148K',
      commitment: 96,
      commitmentColor: 'text-green'
    },
    {
      id: 2,
      name: 'مطاحن الملك',
      initial: 'م',
      category: 'مواد جافة',
      phone: '0112345678',
      status: 'نشط',
      statusType: 'active',
      rating: 4.5,
      orders: 28,
      monthly: '62K',
      commitment: 91,
      commitmentColor: 'text-green'
    },
    {
      id: 3,
      name: 'مزرعة الخير',
      initial: 'م',
      category: 'خضروات وفواكه',
      phone: '0564312200',
      status: 'نشط',
      statusType: 'active',
      rating: 4.2,
      orders: 35,
      monthly: '39K',
      commitment: 84,
      commitmentColor: 'text-orange'
    },
    {
      id: 4,
      name: 'مستودعات البحر',
      initial: 'م',
      category: 'مأكولات بحرية',
      phone: '0126789000',
      status: 'موقوف مؤقتاً',
      statusType: 'suspended',
      rating: 3.8,
      orders: 15,
      monthly: '22K',
      commitment: 77,
      commitmentColor: 'text-red'
    }
  ];

  // دالة بسيطة لإنشاء مصفوفة للنجوم
  getStars(rating: number): number[] {
    return Array(5).fill(0);
  }

  addSupplier() { console.log('إضافة مورد جديد'); }
  exportExcel() { console.log('تصدير إكسيل'); }
  newOrder(id: number) { console.log('طلب جديد من المورد:', id); }
  viewDeliveries(id: number) { console.log('عرض تسليمات المورد:', id); }
}