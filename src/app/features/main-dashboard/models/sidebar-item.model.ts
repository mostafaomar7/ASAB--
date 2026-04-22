export type UserRole =
  | 'accountant'
  | 'chief_accountant'
  | 'hr_affairs'
  | 'supplier'
  | 'purchasing_manager'
  | 'branch_manager';

export interface SidebarItem {
  label: string;
  route: string;
  roles: UserRole[];
  icon?: string;   // إضافة الأيقونة
  badge?: number;  // إضافة رقم الإشعار (اختياري)
}