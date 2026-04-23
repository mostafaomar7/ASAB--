export type UserRole =
  |'admin'
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
  badge?: string | number; // رقم الإشعار مثل '3'
  badgeColor?: 'red' | 'orange'; // إضافة رقم الإشعار (اختياري)
}