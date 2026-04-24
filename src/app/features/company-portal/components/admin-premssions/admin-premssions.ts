import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

// أنواع الصلاحيات المتاحة
type PermissionType = 'view' | 'insert' | 'review' | 'approve' | 'final' | 'none';

interface Role {
  id: string;
  name: string;
  subtitle: string;
}

interface ModuleRow {
  name: string;
  permissions: Record<string, PermissionType>; // Key is Role ID
}

@Component({
  selector: 'app-admin-premssions',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './admin-premssions.html',
  styleUrl: './admin-premssions.css',
})
export class AdminPremssions {
  // حالة وضع التعديل (عشان لو حبيت تفعلها بعدين)
  isEditMode = signal<boolean>(false);

  // تعريف الأدوار (الأعمدة)
  roles = signal<Role[]>([
    { id: 'accountant', name: 'محاسب', subtitle: 'علامات/مطاعم محددة' },
    { id: 'chief_accountant', name: 'رئيس حسابات', subtitle: 'علامات محددة' },
    { id: 'branch_manager', name: 'مدير فرع', subtitle: 'فرع واحد' },
    { id: 'purchasing_manager', name: 'مدير مشتريات', subtitle: 'علامات محددة' },
    { id: 'supplier', name: 'مورد', subtitle: 'نطاق المورد' },
    { id: 'admin', name: 'أدمن', subtitle: 'كامل' },
  ]);

  // داتا المصفوفة (الصفوف)
  matrixData = signal<ModuleRow[]>([
    {
      name: 'المبيعات',
      permissions: { accountant: 'review', chief_accountant: 'final', branch_manager: 'insert', purchasing_manager: 'view', supplier: 'view', admin: 'approve' }
    },
    {
      name: 'المصروفات',
      permissions: { accountant: 'review', chief_accountant: 'final', branch_manager: 'insert', purchasing_manager: 'none', supplier: 'none', admin: 'approve' }
    },
    {
      name: 'المشتريات',
      permissions: { accountant: 'review', chief_accountant: 'final', branch_manager: 'none', purchasing_manager: 'approve', supplier: 'insert', admin: 'approve' }
    },
    {
      name: 'المخزون',
      permissions: { accountant: 'review', chief_accountant: 'final', branch_manager: 'insert', purchasing_manager: 'none', supplier: 'none', admin: 'approve' }
    },
    {
      name: 'الشيفات',
      permissions: { accountant: 'view', chief_accountant: 'final', branch_manager: 'insert', purchasing_manager: 'none', supplier: 'none', admin: 'approve' }
    },
    {
      name: 'كشف الحساب',
      permissions: { accountant: 'review', chief_accountant: 'final', branch_manager: 'view', purchasing_manager: 'none', supplier: 'none', admin: 'approve' }
    },
    {
      name: 'العهد النقدية',
      permissions: { accountant: 'review', chief_accountant: 'final', branch_manager: 'insert', purchasing_manager: 'none', supplier: 'none', admin: 'approve' }
    },
    {
      name: 'الأصول الثابتة',
      permissions: { accountant: 'review', chief_accountant: 'final', branch_manager: 'insert', purchasing_manager: 'none', supplier: 'none', admin: 'approve' }
    },
    {
      name: 'تصدير ERP',
      permissions: { accountant: 'none', chief_accountant: 'approve', branch_manager: 'none', purchasing_manager: 'none', supplier: 'none', admin: 'approve' }
    },
    {
      name: 'إدارة المستخدمين',
      permissions: { accountant: 'none', chief_accountant: 'none', branch_manager: 'none', purchasing_manager: 'none', supplier: 'none', admin: 'approve' }
    },
    {
      name: 'إدارة الاشتراكات',
      permissions: { accountant: 'none', chief_accountant: 'none', branch_manager: 'none', purchasing_manager: 'none', supplier: 'none', admin: 'approve' }
    }
  ]);

  // دالة مساعدة لترجمة نوع الصلاحية للنص اللي بيظهر
  getPermissionLabel(type: PermissionType): string {
    const labels: Record<PermissionType, string> = {
      view: 'عرض',
      insert: 'إدخال',
      review: 'مراجعة',
      approve: 'اعتماد',
      final: 'نهائي',
      none: '—'
    };
    return labels[type];
  }
}