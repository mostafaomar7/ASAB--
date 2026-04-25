import { Routes } from '@angular/router';
import { authGuard } from './core/guards/auth.guard';

export const appRoutes: Routes = [
 // ==========================================
  // 1. المسارات العامة (بدون سايد بار - Public Shell)
  // ==========================================
  {
    path: '',
    loadComponent: () =>
      import('./core/layouts/public-shell/public-shell.component').then((m) => m.PublicShellComponent),
    children: [
      // الصفحة الأولى: اختيار نوع النظام (Feature Select)
      {
        path: '',
        loadComponent: () =>
          import('./features/landing/feature-select/feature-select.component').then((m) => m.FeatureSelectComponent),
      },
      // الصفحة الثانية: اختيار الدور للداشبورد الرئيسي (الصورة التي أرسلتها)
      {
        path: 'main-dashboard',
        loadComponent: () =>
          import('./features/main-dashboard/pages/home/main-dashboard-home.component').then((m) => m.MainDashboardHomeComponent),
      },
      // الصفحة الثانية (بديل): اختيار الدور لبوابة الشركات
      {
        path: 'company-portal',
        loadComponent: () =>
          import('./features/company-portal/pages/home/company-portal-home.component').then((m) => m.CompanyPortalHomeComponent),
      },
      // صفحة تسجيل الدخول
      {
        path: 'login',
        loadComponent: () =>
          import('./features/auth/login/login.component').then((m) => m.LoginComponent),
      },
    ],
  },

  // ==========================================
  // 2. المسارات المحمية (بها السايد بار - Dashboard Shell)
  // ==========================================
  {
    path: 'app', // قمنا بتسمية المسار الأساسي للنظام الفعلي بـ app أو dashboard
    // canActivate: [authGuard], // حماية هذا المسار بحيث لا يدخله إلا من سجل دخوله
    loadComponent: () =>
      import('./core/layouts/dashboard-shell/dashboard-shell.component').then((m) => m.DashboardShellComponent),
    children: [
      // هنا تضع مسارات النظام الفعلي بعد اللوجين (المحتوى الذي يتغير بتغير السايد بار)
      // مثال:
      {
        path: 'kpis',
        loadComponent: () => import('./features/company-portal/components/main-admin/kpis/kpis').then(m => m.Kpis)
      },
      {
        path: 'admin-users',
        loadComponent: () => import('./features/company-portal/components/main-admin/admin-users/admin-users').then(m => m.AdminUsers)
      },
      {
        path: 'premssions',
        loadComponent: () => import('./features/company-portal/components/main-admin/admin-premssions/admin-premssions').then(m => m.AdminPremssions)
      },
      {
        path: 'settings',
        loadComponent: () => import('./features/company-portal/components/main-admin/admin-settings/admin-settings').then(m => m.AdminSettings)
      },
      {
        path: 'activitylog',
        loadComponent: () => import('./features/company-portal/components/main-admin/admin-activitylog/admin-activitylog').then(m => m.AdminActivitylog)
      },
      {
        path: 'subscription',
        loadComponent: () => import('./features/company-portal/components/main-admin/admin-subscribtion/admin-subscribtion').then(m => m.AdminSubscribtion)
      },
      {
        path: 'subscribers',
        loadComponent: () => import('./features/company-portal/components/main-admin/admin-subscribers/admin-subscribers').then(m => m.AdminSubscribers)
      },
      {
        path: 'branchKpis',
        loadComponent: () => import('./features/company-portal/components/branch_manager/kpis/kpis').then(m => m.Kpis)
      },
      {
        path: 'branch-employees',
        loadComponent: () => import('./features/company-portal/components/branch_manager/branch-employees/branch-employees').then(m => m.BranchEmployees)
      },
      {
        path: 'branch-items',
        loadComponent: () => import('./features/company-portal/components/branch_manager/branch-items/branch-items').then(m => m.BranchItems)
      },
      {
        path: 'branch-suppliers',
        loadComponent: () => import('./features/company-portal/components/branch_manager/branch-suppliers/branch-suppliers').then(m => m.BranchSuppliers)
      },
      {
        path: 'branch-uploads',
        loadComponent: () => import('./features/company-portal/components/branch_manager/branch-uploads/branch-uploads').then(m => m.BranchUploads)
      },
       {
        path: 'branch-setting',
        loadComponent: () => import('./features/company-portal/components/branch_manager/branch-settings/branch-settings').then(m => m.BranchSettings)
      },
      {
        path: 'Purchasing-Kpis',
        loadComponent: () => import('./features/company-portal/components/purchasing-manager/purchasing-kpis/purchasing-kpis').then(m => m.PurchasingKpis)
      },
      {
        path: 'Purchasing-new-orders',
        loadComponent: () => import('./features/company-portal/components/purchasing-manager/purchasing-neworder/purchasing-neworder').then(m => m.PurchasingNeworder)
      },
      {
        path: 'Purchasing-collect-orders',
        loadComponent: () => import('./features/company-portal/components/purchasing-manager/purchasing-collectorder/purchasing-collectorder').then(m => m.PurchasingCollectorder)
      },
      {
        path: 'Purchasing-send-supplier',
        loadComponent: () => import('./features/company-portal/components/purchasing-manager/purchasing-sendsupplier/purchasing-sendsupplier').then(m => m.PurchasingSendsupplier)
      },
      {
        path: 'Purchasing-items',
        loadComponent: () => import('./features/company-portal/components/purchasing-manager/purchasing-items/purchasing-items').then(m => m.PurchasingItems)
      },
      {
        path: 'Purchasing-suppliers',
        loadComponent: () => import('./features/company-portal/components/purchasing-manager/purchasing-suppliers/purchasing-suppliers').then(m => m.PurchasingSuppliers)
      },
      {
        path: 'supplier-kpi',
        loadComponent: () => import('./features/company-portal/components/Suppliers/supplier-kpi/supplier-kpi').then(m => m.SupplierKpi)
      },
      {
        path: 'supplier-neworder',
        loadComponent: () => import('./features/company-portal/components/Suppliers/supplier-neworder/supplier-neworder').then(m => m.SupplierNeworder)
      },
      {
        path: 'supplier-accepted',
        loadComponent: () => import('./features/company-portal/components/Suppliers/supplier-accepted/supplier-accepted').then(m => m.SupplierAccepted)
      },
      {
        path: 'supplier-rejected',
        loadComponent: () => import('./features/company-portal/components/Suppliers/supplier-rejected/supplier-rejected').then(m => m.SupplierRejected)
      },
      {
        path: 'supplier-items-price',
        loadComponent: () => import('./features/company-portal/components/Suppliers/supplier-items-prices/supplier-items-prices').then(m => m.SupplierItemsPrices)
      },
      {
        path: 'supplier-salesreport',
        loadComponent: () => import('./features/company-portal/components/Suppliers/supplier-salesreport/supplier-salesreport').then(m => m.SupplierSalesreport)
      },
    ],
  },
  {
    path: '**',
    redirectTo: '',
  },
];
