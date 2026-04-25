import { Component } from '@angular/core';

@Component({
  selector: 'app-branch-suppliers',
  standalone: true,
  imports: [],
  templateUrl: './branch-suppliers.html',
  styleUrl: './branch-suppliers.css',
})
export class BranchSuppliers {
  // الداتا المبدئية للموردين بناءً على الصورة
  suppliers = [
    { 
      id: 1, 
      initial: 'ش', 
      name: 'شركة الدواجن الوطنية', 
      desc: 'دواجن ولحوم - محمد العلي', 
      phone: '0501234567' 
    },
    { 
      id: 2, 
      initial: 'م', 
      name: 'مطاحن الملك', 
      desc: 'دقيق ومخبوزات - سعد الدوسري', 
      phone: '0507654321' 
    },
    { 
      id: 3, 
      initial: 'م', 
      name: 'مزرعة الخير', 
      desc: 'خضار وفواكه - فهد الشمري', 
      phone: '0509876543' 
    }
  ];
}