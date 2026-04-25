import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-branch-settings',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './branch-settings.html',
  styleUrl: './branch-settings.css',
})
export class BranchSettings {
  // داتا الإعدادات المبدئية مطابقة للصورة
  settings = {
    basicInfo: {
      branchName: 'فرع الرياض - العليا',
      managerName: 'أحمد الشمري',
      phone: '0112456789',
      address: 'الرياض — حي العليا، شارع العروبة'
    },
    workingHours: {
      openTime: '08:00',
      closeTime: '23:00',
      shiftDuration: 8
    },
    financials: {
      taxNumber: '310012345600003',
      iban: 'SA1234567890123456789012',
      pettyCashLimit: 5000
    },
    operations: {
      wasteAlertLimit: 3,
      autoReminders: true,
      mandatoryImages: true
    }
  };

  saveSettings() {
    // هنا تقدر تستخدم RxJS أو Signals لإرسال الداتا للـ API
    console.log('تم حفظ الإعدادات:', this.settings);
  }
}