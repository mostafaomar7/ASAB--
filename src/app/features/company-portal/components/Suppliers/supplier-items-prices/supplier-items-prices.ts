import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-supplier-items-prices',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './supplier-items-prices.html',
  styleUrl: './supplier-items-prices.css',
})
export class SupplierItemsPrices {
  
  isModalOpen = false;

  // بيانات الجدول المبدئية بناءً على الصورة
  items = [
    { id: 1, name: 'دجاج طازج', unit: 'كجم', minLimit: 50, maxLimit: 1000, price: 24, prepTime: '24 ساعة', status: 'متاح' },
    { id: 2, name: 'دجاج مجمد', unit: 'كجم', minLimit: 100, maxLimit: 5000, price: 21, prepTime: '48 ساعة', status: 'متاح' },
    { id: 3, name: 'قطع مشكلة', unit: 'كجم', minLimit: 50, maxLimit: 800, price: 24, prepTime: '24 ساعة', status: 'متاح' },
    { id: 4, name: 'دجاج كامل', unit: 'كجم', minLimit: 30, maxLimit: 500, price: 22, prepTime: '48 ساعة', status: 'غير متاح' }
  ];

  // أوبجكت لحفظ بيانات الصنف الجديد من الفورم
  newItem = {
    name: '',
    unit: 'كجم', // قيمة افتراضية
    minLimit: null,
    maxLimit: null,
    price: null,
    prepTime: '24 ساعة',
    status: 'متاح'
  };

  openModal() {
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
    this.resetForm();
  }

  resetForm() {
    this.newItem = { name: '', unit: 'كجم', minLimit: null, maxLimit: null, price: null, prepTime: '24 ساعة', status: 'متاح' };
  }

  saveItem() {
    // التأكد من إدخال البيانات الأساسية قبل الحفظ
    if (this.newItem.name && this.newItem.price && this.newItem.minLimit) {
      this.items.unshift({
        id: Date.now(), // ID وهمي سريع
        ...this.newItem
      } as any);
      this.closeModal();
    }
  }
}