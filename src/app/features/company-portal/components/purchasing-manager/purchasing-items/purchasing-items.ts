import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-purchasing-items',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './purchasing-items.html',
  styleUrl: './purchasing-items.css',
})
export class PurchasingItems {
  
  searchQuery: string = '';
  totalMonthlyCost: string = '126,560';

  // بيانات الأصناف بناءً على الصورة
  items = [
    { 
      id: 1, name: 'دجاج طازج', category: 'لحوم ودواجن', categoryType: 'meat', 
      supplier: 'شركة الدواجن الوطنية', unit: 'كجم', avgPrice: '24', 
      monthlyConsumption: '2400 كجم', currentStock: 180, lastOrder: 'أمس' 
    },
    { 
      id: 2, name: 'دجاج مجمد', category: 'لحوم ودواجن', categoryType: 'meat', 
      supplier: 'شركة الدواجن الوطنية', unit: 'كجم', avgPrice: '21', 
      monthlyConsumption: '1800 كجم', currentStock: 320, lastOrder: 'قبل 3 أيام' 
    },
    { 
      id: 3, name: 'طحين قمح', category: 'مواد جافة', categoryType: 'dry', 
      supplier: 'مطاحن الملك', unit: 'كيس 50كجم', avgPrice: '185', 
      monthlyConsumption: '40 كيس 50كجم', currentStock: 12, lastOrder: 'الأسبوع الماضي' 
    },
    { 
      id: 4, name: 'زيت نباتي', category: 'مواد جافة', categoryType: 'dry', 
      supplier: 'مطاحن الملك', unit: 'جالون 20ل', avgPrice: '95', 
      monthlyConsumption: '60 جالون 20ل', currentStock: 8, lastOrder: 'قبل 5 أيام' 
    },
    { 
      id: 5, name: 'طماطم طازجة', category: 'خضروات وفواكه', categoryType: 'veg', 
      supplier: 'مزرعة الخير', unit: 'كرتون 10كجم', avgPrice: '45', 
      monthlyConsumption: '300 كرتون 10كجم', currentStock: 25, lastOrder: 'اليوم' 
    },
    { 
      id: 6, name: 'خس', category: 'خضروات وفواكه', categoryType: 'veg', 
      supplier: 'مزرعة الخير', unit: 'كرتون', avgPrice: '38', 
      monthlyConsumption: '120 كرتون', currentStock: 10, lastOrder: 'اليوم' 
    }
  ];

  // دالة لتحديد لون المخزون بناءً على الكمية
  getStockClass(stock: number): string {
    return stock > 20 ? 'text-green' : 'text-red';
  }

  addItem() { console.log('إضافة صنف جديد'); }
  exportExcel() { console.log('تصدير إلى Excel'); }
}