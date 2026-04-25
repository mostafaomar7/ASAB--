import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-purchasing-neworder',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './purchasing-neworder.html',
  styleUrl: './purchasing-neworder.css',
})
export class PurchasingNeworder {
  
  // بيانات الـ KPIs
  kpis = [
    { title: 'طلبات جديدة معلقة', value: '7', subtitle: 'من الفروع', color: 'orange', icon: 'cart' },
    { title: 'تم اعتمادها', value: '0', subtitle: 'هذا الجلسة', color: 'green', icon: 'check' },
    { title: 'الموردون المعنيون', value: '3', subtitle: 'ينتظرون موافقة', color: 'blue', icon: 'users' }
  ];

  // بيانات الطلبات المجمعة حسب الفروع (Matching the image)
  branches = [
    {
      id: 1,
      name: 'فرع الرياض - العليا',
      ordersCount: 3,
      totalValue: '8,900',
      expanded: true, // مفتوح افتراضياً
      orders: [
        { id: 'PO-101', supplier: 'شركة الدواجن الوطنية', items: 4, time: 'قبل 30 دقيقة', value: '4,000', hasWarning: false },
        { id: 'PO-102', supplier: 'شركة الدواجن الوطنية', items: 2, time: 'قبل ساعة', value: '2,300', hasWarning: false },
        { id: 'PO-103', supplier: 'مطاحن الملك', items: 3, time: 'قبل ساعتين', value: '1,900', hasWarning: false }
      ]
    },
    {
      id: 2,
      name: 'فرع جدة - الحمراء',
      ordersCount: 2,
      totalValue: '12,600',
      expanded: true,
      orders: [
        { id: 'PO-104', supplier: 'شركة الدواجن الوطنية', items: 6, time: 'قبل ساعة', value: '8,200', hasWarning: true, warningText: 'تجاوز الحد المسموح' },
        { id: 'PO-105', supplier: 'مزرعة الخير', items: 4, time: 'قبل ساعتين', value: '4,400', hasWarning: false }
      ]
    },
    {
      id: 3,
      name: 'فرع مكة - المعابدة',
      ordersCount: 1,
      totalValue: '2,100',
      expanded: true,
      orders: [
        { id: 'PO-106', supplier: 'مطاحن الملك', items: 3, time: 'قبل ساعتين', value: '2,100', hasWarning: false }
      ]
    }
  ];

  // الفلاتر
  filters = { branch: 'الكل', supplier: 'الكل', priority: 'الكل' };

  toggleBranch(branch: any) {
    branch.expanded = !branch.expanded;
  }

  approveAllGlobal() { console.log('اعتماد كل الطلبات (7)'); }
  approveBranch(branchId: number) { console.log('اعتماد طلبات الفرع:', branchId); }
  approveOrder(orderId: string) { console.log('اعتماد الطلب:', orderId); }
}