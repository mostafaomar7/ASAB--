import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-branch-employees',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './branch-employees.html',
  styleUrl: './branch-employees.css',
})
export class BranchEmployees {
  isModalOpen = false;

  // الداتا المبدئية للجدول
  employees = [
    { name: 'خالد الشمري', role: 'مشرف الشفت', salary: 4500, shift: 'صباحي', status: 'نشط', initial: 'خ' },
    { name: 'محمد العتيبي', role: 'كاشير رئيسي', salary: 3200, shift: 'صباحي', status: 'نشط', initial: 'م' },
    { name: 'سعد الدوسري', role: 'كاشير', salary: 2800, shift: 'مسائي', status: 'إجازة', initial: 'س' },
    { name: 'أحمد الغامدي', role: 'عامل مطبخ', salary: 2500, shift: 'صباحي', status: 'نشط', initial: 'أ' },
  ];

  // أوبجكت لاستقبال بيانات الموظف الجديد من الفورم
  newEmployee = {
    name: '',
    role: '',
    salary: null,
    shift: 'صباحي',
    status: 'نشط'
  };

  openModal() {
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
    // تصفير الفورم بعد الإغلاق
    this.newEmployee = { name: '', role: '', salary: null, shift: 'صباحي', status: 'نشط' };
  }

  saveEmployee() {
    if (this.newEmployee.name && this.newEmployee.role && this.newEmployee.salary) {
      this.employees.unshift({
        ...this.newEmployee,
        initial: this.newEmployee.name.charAt(0),
        salary: this.newEmployee.salary
      });
      this.closeModal();
    }
  }
}