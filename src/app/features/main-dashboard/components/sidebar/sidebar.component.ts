import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SIDEBAR_ITEMS } from './sidebar-items';
import { SidebarItem, UserRole } from '../../models/sidebar-item.model';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css'
})
export class SidebarComponent implements OnInit {
  allItems = SIDEBAR_ITEMS;
  visibleItems: SidebarItem[] = [];
  currentRole: UserRole | '' = 'admin';
 
  ngOnInit(): void {
    const userData = localStorage.getItem('user');

    if (userData) {
      const user = JSON.parse(userData);
      this.currentRole = user.role || '';
    }

    this.visibleItems = this.allItems.filter(item =>
      item.roles.includes(this.currentRole as UserRole)
    );
  }
  
}