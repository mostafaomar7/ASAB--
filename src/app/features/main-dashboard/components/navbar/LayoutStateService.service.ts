import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LayoutStateService {
  // الـ Signal اللي هيشيل عنوان الصفحة الحالي
  pageTitle = signal<string>('نظرة عامة');

  // دالة لتحديث العنوان
  updateTitle(newTitle: string) {
    this.pageTitle.set(newTitle);
  }
}