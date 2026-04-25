import { Component } from '@angular/core';

@Component({
  selector: 'app-branch-items',
  standalone: true,
  imports: [],
  templateUrl: './branch-items.html',
  styleUrl: './branch-items.css',
})
export class BranchItems {
  // مصفوفة الأصناف بناءً على الصورة
  items = [
    { id: 1, name: 'دجاج طازج' },
    { id: 2, name: 'حليب طازج' },
    { id: 3, name: 'خس' },
    { id: 4, name: 'طماطم' },
    { id: 5, name: 'بطاطس' },
    { id: 6, name: 'زيت قلي' },
    { id: 7, name: 'كاتشب' },
    { id: 8, name: 'ماء معدني' },
    { id: 9, name: 'عصير برتقال' },
    { id: 10, name: 'خبز برجر' }
  ];
}