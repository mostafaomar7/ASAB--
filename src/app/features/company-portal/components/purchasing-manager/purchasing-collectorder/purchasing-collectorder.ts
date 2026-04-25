import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-purchasing-collectorder',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './purchasing-collectorder.html',
  styleUrl: './purchasing-collectorder.css',
})
export class PurchasingCollectorder {
  // للتحكم في طريقة العرض النشطة
  viewMode: 'supplier' | 'city' = 'supplier';

  // بيانات التجميع بالمورد (الصورة الأولى)
  suppliers = [
    { 
      id: 1, 
      name: 'شركة الدواجن الوطنية', 
      details: '12 فرع · 3 أصناف · الرياض / جدة / الدمام', 
      price: '28,400', 
      isOverCapacity: true 
    },
    { 
      id: 2, 
      name: 'مطاحن الملك', 
      details: '8 فروع · 2 أصناف · الرياض / مكة', 
      price: '14,200', 
      isOverCapacity: false 
    },
    { 
      id: 3, 
      name: 'مزرعة الخير', 
      details: '15 فرع · 6 أصناف · جدة / مكة / الدمام', 
      price: '32,100', 
      isOverCapacity: true 
    }
  ];

  // بيانات التجميع بالمدينة (الصورة الثانية)
  cities = [
    { 
      id: 1, 
      name: 'الرياض', 
      ordersCount: 3, 
      suppliersCount: 2, 
      urgentCount: 0, 
      price: '8,900', 
      suppliersList: ['شركة الدواجن الوطنية', 'مطاحن الملك'] 
    },
    { 
      id: 2, 
      name: 'جدة', 
      ordersCount: 2, 
      suppliersCount: 2, 
      urgentCount: 2, 
      price: '13,600', 
      suppliersList: ['شركة الدواجن الوطنية', 'مزرعة الخير'] 
    },
    { 
      id: 3, 
      name: 'مكة', 
      ordersCount: 1, 
      suppliersCount: 1, 
      urgentCount: 0, 
      price: '3,100', 
      suppliersList: ['مطاحن الملك'] 
    },
    { 
      id: 4, 
      name: 'الدمام', 
      ordersCount: 1, 
      suppliersCount: 1, 
      urgentCount: 1, 
      price: '5,600', 
      suppliersList: ['مزرعة الخير'] 
    }
  ];

  setViewMode(mode: 'supplier' | 'city') {
    this.viewMode = mode;
  }

  sendToSupplier(id: number) { console.log('إرسال للمورد رقم:', id); }
  viewDetails(id: number) { console.log('عرض تفاصيل المورد رقم:', id); }
  viewCityOrders(name: string) { console.log('عرض طلبات مدينة:', name); }
}