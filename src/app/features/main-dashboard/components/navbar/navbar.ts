import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutStateService } from './LayoutStateService.service'; // مسار السيرفيس

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  // عمل Inject للسيرفيس عشان نستخدمها في الـ HTML
  layoutState = inject(LayoutStateService);
}