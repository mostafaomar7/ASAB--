import { SidebarItem } from '../../models/sidebar-item.model';

export const SIDEBAR_ITEMS: SidebarItem[] = [
  {
    label: 'الرئيسية',
    route: '/main-dashboard/home',
    icon: 'fa-solid fa-border-all', // أيقونة كمثال
    roles: ['accountant', 'chief_accountant', 'hr_affairs', 'supplier', 'purchasing_manager', 'branch_manager']
  },
  {
    label: 'المحاسبات',
    route: '/main-dashboard/accountant',
    icon: 'fa-solid fa-calculator',
    roles: ['accountant']
  },
  {
    label: 'رئيس الحسابات',
    route: '/main-dashboard/chief-accountant',
    icon: 'fa-solid fa-crown',
    badge: 3, // مثال لإشعار
    roles: ['chief_accountant']
  },
  {
    label: 'شؤون الموظفين',
    route: '/main-dashboard/hr-affairs',
    icon: 'fa-solid fa-users',
    roles: ['hr_affairs']
  },
  {
    label: 'المورد',
    route: '/main-dashboard/supplier',
    icon: 'fa-solid fa-truck-fast',
    roles: ['supplier']
  },
  {
    label: 'مدير المشتريات',
    route: '/main-dashboard/purchasing-manager',
    icon: 'fa-solid fa-cart-shopping',
    roles: ['purchasing_manager']
  },
  {
    label: 'مدير الفرع',
    route: '/main-dashboard/branch-manager',
    icon: 'fa-solid fa-store',
    roles: ['branch_manager']
  }
];