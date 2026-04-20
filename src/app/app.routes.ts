import { Routes } from '@angular/router';

export const appRoutes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./core/layouts/public-shell/public-shell.component').then((m) => m.PublicShellComponent),
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./features/landing/feature-select/feature-select.component').then((m) => m.FeatureSelectComponent),
      },
      {
        path: 'login',
        loadComponent: () =>
          import('./features/auth/login/login.component').then((m) => m.LoginComponent),
      },
    ],
  },
  {
    path: 'main-dashboard',
    loadComponent: () =>
      import('./core/layouts/dashboard-shell/dashboard-shell.component').then((m) => m.DashboardShellComponent),
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./features/main-dashboard/pages/home/main-dashboard-home.component').then((m) => m.MainDashboardHomeComponent),
      },
    ],
  },
  {
    path: 'company-portal',
    loadComponent: () =>
      import('./core/layouts/dashboard-shell/dashboard-shell.component').then((m) => m.DashboardShellComponent),
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./features/company-portal/pages/home/company-portal-home.component').then((m) => m.CompanyPortalHomeComponent),
      },
    ],
  },
  {
    path: '**',
    redirectTo: '',
  },
];
