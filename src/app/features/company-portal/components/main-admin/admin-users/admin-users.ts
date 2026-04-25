import { Component, ElementRef, signal, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';

interface StatCard { title: string; count: number; colorClass: string; }
interface User { 
  id: number; name: string; email: string; phone: string; initial: string; 
  avatarColor: string; tags: {label: string, type: string}[]; 
  brands: string; 
}

@Component({
  selector: 'app-admin-users',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './admin-users.html',
  styleUrl: './admin-users.css',
})
export class AdminUsers {
  // إدارة حالة التابات
  activeTab = signal<string>('users');

  // إدارة حالة الـ Modal والـ Stepper
  isModalOpen = signal<boolean>(false);
  currentStep = signal<number>(1);

  // للوصول للـ Input المخفي بتاع الـ CSV
  @ViewChild('csvInput') csvInput!: ElementRef<HTMLInputElement>;

  // ---------------- الوظائف (Methods) ----------------

  // فتح الـ Modal
  openAddUserModal() {
    this.currentStep.set(1);
    this.isModalOpen.set(true);
  }

  // قفل الـ Modal
  closeModal() {
    this.isModalOpen.set(false);
  }

  // التنقل بين الخطوات
  nextStep() {
    if (this.currentStep() < 3) {
      this.currentStep.update(step => step + 1);
    }
  }

  prevStep() {
    if (this.currentStep() > 1) {
      this.currentStep.update(step => step - 1);
    }
  }

  // استيراد الـ CSV
  triggerCsvUpload() {
    // التأكد من وجود العنصر قبل عمل click لتفادي الـ Errors
    if (this.csvInput) {
      this.csvInput.nativeElement.click();
    }
  }

  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      const file = input.files[0];
      console.log('تم اختيار الملف:', file.name);
      // هنا هتبعت الـ file للسيرفر عن طريق الـ Service بتاعتك
      
      // تفريغ الـ input عشان لو اليوزر اختار نفس الملف تاني يشتغل
      input.value = ''; 
    }
  }

  // ---------------- الداتا (Mock Data) ----------------

  stats = signal<StatCard[]>([
    { title: 'محاسب', count: 4, colorClass: 'text-blue' },
    { title: 'رئيس حسابات', count: 1, colorClass: 'text-orange' },
    { title: 'مدير فرع', count: 1, colorClass: 'text-teal' },
    { title: 'مدير مشتريات', count: 1, colorClass: 'text-purple' },
    { title: 'مورد', count: 0, colorClass: 'text-red' },
    { title: 'أدمن', count: 0, colorClass: 'text-red' }
  ]);

  users = signal<User[]>([
    {
      id: 1,
      name: 'أحمد محمد الشهري',
      email: 'ahmed@asab.sa',
      phone: '0501234567',
      initial: 'أ',
      avatarColor: 'bg-gradient-blue',
      tags: [
        { label: 'محاسب', type: 'role-blue' },
        { label: 'مطعم', type: 'role-blue-light' },
        { label: 'نشط', type: 'status-active' }
      ],
      brands: 'علامة الريم'
    },
    {
      id: 2,
      name: 'سارة العمري',
      email: 'sara@asab.sa',
      phone: '0507654321',
      initial: 'س',
      avatarColor: 'bg-gradient-purple',
      tags: [
        { label: 'محاسب', type: 'role-blue' },
        { label: 'مطعم', type: 'role-blue-light' },
        { label: 'نشط', type: 'status-active' }
      ],
      brands: 'علامة هرفي'
    },
    {
      id: 3,
      name: 'خالد العمري',
      email: 'khaled@asab.sa',
      phone: '0509876543',
      initial: 'خ',
      avatarColor: 'bg-gradient-cyan',
      tags: [
        { label: 'رئيس حسابات', type: 'role-orange' },
        { label: 'علامة تجارية', type: 'role-purple' },
        { label: 'نشط', type: 'status-active' }
      ],
      brands: 'علامة الريم، علامة هرفي، ماكدونالدز'
    }
  ]);
}