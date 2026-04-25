import { SidebarItem } from '../../models/sidebar-item.model';

export const SIDEBAR_ITEMS: SidebarItem[] = [
  {
    label: 'نظرة عامة',
    route: '/app/kpis',
    icon: 'fa-solid fa-calculator',
    roles: ['admin']
  },
  {
    label: 'المستخدمون',
    route: '/app/admin-users',
    icon: 'fa-solid fa-calculator',
    roles: ['admin']
  },
  {
    label: 'المطاعم و الفروع',
    route: '/main-dashboard/accountant',
    icon: 'fa-solid fa-calculator',
    roles: ['admin']
  },
  {
    label: 'الاشتراكات',
    route: '/app/subscribers',
    icon: 'fa-solid fa-calculator',
    roles: ['admin']
  },
  {
    label: 'اشتراكات الشركات',
    route: '/app/subscription',
    icon: 'fa-solid fa-calculator',
    roles: ['admin']
  },
  {
    label: 'الصلاحيات',
    route: '/app/premssions',
    icon: 'fa-solid fa-calculator',
    roles: ['admin']
  },
  {
    label: 'مدير التقارير',
    route: '/main-dashboard/accountant',
    icon: 'fa-solid fa-calculator',
    roles: ['admin']
  },
  {
    label: 'سجل النشاطات',
    route: '/app/activitylog',
    icon: 'fa-solid fa-calculator',
    roles: ['admin']
  },
  {
    label: 'اعدادات النظام',
    route: '/app/settings',
    icon: 'fa-solid fa-calculator',
    roles: ['admin']
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
  // مدير المشتريات
   {
    label: 'نظرة عامة',
    route: '/app/branchKpis',
    icon: 'fa-solid fa-store',
    roles: ['branch_manager']
  },
   {
    label: 'الموظفون',
    route: '/app/branch-employees',
    icon: 'fa-solid fa-store',
    roles: ['branch_manager']
  },
   {
    label: 'الأصناف',
    route: '/app/branch-items',
    icon: 'fa-solid fa-store',
    roles: ['branch_manager']
  },
   {
    label: 'الموردون',
    route: '/app/branch-suppliers',
    icon: 'fa-solid fa-store',
    roles: ['branch_manager']
  },
   {
    label: 'رفع البيانات',
    route: '/app/branch-uploads',
    icon: 'fa-solid fa-store',
    roles: ['branch_manager']
  },
   {
    label: 'اعدادت الفرع',
    route: '/app/branch-setting',
    icon: 'fa-solid fa-store',
    roles: ['branch_manager']
  },
  // purchasing_manager
{
    label: 'لوحة التحكم',
    route: '/app/Purchasing-Kpis',
    icon: 'fa-solid fa-store',
    roles: ['purchasing_manager']
  },
  {
    label: 'الطلبات الجديدة',
    route: '/app/Purchasing-new-orders',
    icon: 'fa-solid fa-store',
    roles: ['purchasing_manager']
  },
  {
    label: 'الطلبات المجمعة',
    route: '/app/Purchasing-collect-orders',
    icon: 'fa-solid fa-store',
    roles: ['purchasing_manager']
  },
  {
    label: 'المراسلة للموردين',
    route: '/app/Purchasing-send-supplier',
    icon: 'fa-solid fa-store',
    roles: ['purchasing_manager']
  },
  {
    label: 'الاصناف',
    route: '/app/Purchasing-items',
    icon: 'fa-solid fa-store',
    roles: ['purchasing_manager']
  },
  {
    label: 'الموردون',
    route: '/app/Purchasing-suppliers',
    icon: 'fa-solid fa-store',
    roles: ['purchasing_manager']
  },
  {
    label: 'التقارير',
    route: '/app/branch-setting',
    icon: 'fa-solid fa-store',
    roles: ['purchasing_manager']
  },
  // supplier
  {
    label: 'لوحة التحكم',
    route: '/app/supplier-kpi',
    icon: 'fa-solid fa-truck-fast',
    roles: ['supplier']
   },
   {
    label: 'الطلبات الجديدة',
    route: '/app/supplier-neworder',
    icon: 'fa-solid fa-truck-fast',
    roles: ['supplier']
   },
   {
    label: 'المقبولة',
    route: '/app/supplier-accepted',
    icon: 'fa-solid fa-truck-fast',
    roles: ['supplier']
   },
   {
    label: 'المرفوضة',
    route: '/app/supplier-rejected',
    icon: 'fa-solid fa-truck-fast',
    roles: ['supplier']
   },
   {
    label: 'الاصناف و الاسعار',
    route: '/app/supplier-items-price',
    icon: 'fa-solid fa-truck-fast',
    roles: ['supplier']
   },
   {
    label: 'تقارير المبيعات',
    route: '/app/supplier-salesreport',
    icon: 'fa-solid fa-truck-fast',
    roles: ['supplier']
   },
];