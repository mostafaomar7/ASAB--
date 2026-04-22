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
    canActivate: [authGuard], // حماية هذا المسار بحيث لا يدخله إلا من سجل دخوله
    loadComponent: () =>
      import('./core/layouts/dashboard-shell/dashboard-shell.component').then((m) => m.DashboardShellComponent),
    children: [
      // هنا تضع مسارات النظام الفعلي بعد اللوجين (المحتوى الذي يتغير بتغير السايد بار)
      // مثال:
      // {
      //   path: 'accountant',
      //   loadComponent: () => import('./features/accountant/accountant-dashboard.component').then(m => m.AccountantDashboardComponent)
      // },
      // {
      //   path: 'branch-manager',
      //   loadComponent: () => import('./features/branch-manager/branch-dashboard.component').then(m => m.BranchDashboardComponent)
      // },
    ],
  },
  {
    path: '**',
    redirectTo: '',
  },
];
