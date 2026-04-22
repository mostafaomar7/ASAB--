import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})export class LoginComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  
  returnUrl: string = '/';

  ngOnInit() {
    // التقاط المسار المطلوب من الرابط
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  onLoginSuccess() {
    // بعد نجاح تسجيل الدخول (سواء بـ API أو وهمي للـ Prototype)
    // نوجه المستخدم للمسار اللي كان عايزه
    this.router.navigateByUrl(this.returnUrl);
  }
  onSubmit(event: Event) {
    event.preventDefault(); // منع إعادة تحميل الصفحة
    
    // هنا المفروض يتم استدعاء الـ API للتحقق من البيانات
    // للنموذج التفاعلي (Prototype)، سنقوم بتسجيل الدخول مباشرة:
    localStorage.setItem('token', 'dummy-token-123'); 
    
    // توجيه المستخدم للداشبورد المخصصة له بناءً على اختياره السابق
    this.router.navigateByUrl(this.returnUrl);
  }

}