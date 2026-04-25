import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-purchasing-kpis',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './purchasing-kpis.html',
  styleUrl: './purchasing-kpis.css',
})
export class PurchasingKpis {
  
  // بيانات الـ KPIs العلوية مرتبة من اليمين لليسار
  kpis = [
    { 
      id: 1, 
      title: 'طلبات جديدة', 
      value: '45', 
      subtitle: 'من 40 فرع', 
      colorScheme: 'red', 
      icon: 'cart' 
    },
    { 
      id: 2, 
      title: 'طلبات مجمعة', 
      value: '12', 
      subtitle: 'جاهزة للإرسال', 
      colorScheme: 'blue', 
      icon: 'box' 
    },
    { 
      id: 3, 
      title: 'أرسلت للموردين', 
      value: '8', 
      subtitle: '', 
      colorScheme: 'orange', 
      icon: 'truck' 
    },
    { 
      id: 4, 
      title: 'قيمة الطلبات', 
      value: '148K', 
      suffix: 'ر.س', 
      subtitle: 'هذا الأسبوع', 
      colorScheme: 'purple', 
      icon: 'chart' 
    }
  ];

  // بيانات طلبات الفروع
  branchOrders = [
    { 
      id: 1, 
      branchName: 'فرع الرياض - العليا', 
      itemsCount: 4, 
      status: 'عادي', 
      value: '4,800', 
      isUrgent: false 
    },
    { 
      id: 2, 
      branchName: 'فرع جدة - الحمراء', 
      itemsCount: 6, 
      status: 'عاجل', 
      value: '8,200', 
      isUrgent: true // دي اللي بتعمل الخط الأحمر الجانبي وبتخلي النص أحمر
    },
    { 
      id: 3, 
      branchName: 'فرع مكة - المعابدة', 
      itemsCount: 3, 
      status: 'عادي', 
      value: '3,100', 
      isUrgent: false 
    }
  ];

  aggregateOrders() {
    console.log('تم الضغط على تجميع الطلبات');
  }

  approveOrder(orderId: number) {
    console.log('تم اعتماد الطلب رقم:', orderId);
  }

  viewDetails(orderId: number) {
    console.log('عرض تفاصيل الطلب رقم:', orderId);
  }
}