import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { CommonModule } from '@angular/common';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule],
  template: `
    <aside class="sidebar">
      <div class="logo-section">
        <div class="logo">
          <div class="logo-icon">
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M13 3L4 14h7v7l9-11h-7V3z"/>
            </svg>
          </div>
          <span>RescueNet</span>
        </div>
      </div>

      <nav class="nav-menu">
        <div 
          *ngFor="let item of navItems" 
          class="nav-item" 
          [class.active]="item.route === activeRoute"
          (click)="navigate(item.route)">
          <div class="nav-icon" [innerHTML]="item.icon"></div>
          <span>{{ item.label }}</span>
        </div>
      </nav>

      <div class="system-status">
        <div class="status-indicator">
          <div class="status-dot"></div>
          <span>All Systems Operational</span>
        </div>
      </div>
    </aside>
  `,
  styles: [`
    .sidebar {
      width: 240px;
      background: var(--color-bg-secondary);
      border-right: 1px solid var(--color-border);
      display: flex;
      flex-direction: column;
      position: relative;
      z-index: 100;
    }

    .logo-section {
      padding: var(--space-lg);
      border-bottom: 1px solid var(--color-border);
      background: linear-gradient(135deg, var(--color-bg-secondary) 0%, var(--color-bg-tertiary) 100%);
    }

    .logo {
      font-size: 1.75rem;
      font-weight: 700;
      letter-spacing: 0.5px;
      color: var(--color-active);
      display: flex;
      align-items: center;
      gap: var(--space-sm);
    }

    .logo-icon {
      width: 32px;
      height: 32px;
      background: linear-gradient(135deg, var(--color-active), var(--color-accent-purple));
      border-radius: 6px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.2rem;
      animation: pulse-glow 3s ease-in-out infinite;
    }

    .logo-icon svg {
      width: 24px;
      height: 24px;
      fill: currentColor;
    }

    .nav-menu {
      flex: 1;
      padding: var(--space-md);
      overflow-y: auto;
    }

    .nav-item {
      padding: var(--space-md);
      margin-bottom: var(--space-sm);
      border-radius: 6px;
      cursor: pointer;
      transition: all 0.2s ease;
      display: flex;
      align-items: center;
      gap: var(--space-md);
      font-weight: 500;
      font-size: 0.95rem;
      letter-spacing: 0.3px;
      border: 1px solid transparent;
    }

    .nav-item:hover {
      background: var(--color-bg-tertiary);
      border-color: var(--color-border-light);
    }

    .nav-item.active {
      background: var(--color-bg-elevated);
      border-color: var(--color-active);
      color: var(--color-active);
      box-shadow: var(--shadow-glow);
    }

    .nav-icon {
      width: 20px;
      height: 20px;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .nav-icon svg {
      width: 20px;
      height: 20px;
      fill: currentColor;
    }

    .system-status {
      padding: var(--space-md);
      border-top: 1px solid var(--color-border);
    }

    .status-indicator {
      display: flex;
      align-items: center;
      gap: var(--space-sm);
      padding: var(--space-sm);
      background: var(--color-bg-tertiary);
      border-radius: 4px;
      font-size: 0.85rem;
      font-family: var(--font-mono);
    }

    .status-dot {
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background: var(--color-success);
      animation: blink 2s ease-in-out infinite;
    }
  `]
})
export class SidebarComponent {
  activeRoute = '/dashboard';

  navItems = [
    { route: '/dashboard', label: 'Dispatcher Hub', icon: '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/><circle cx="12" cy="12" r="3" fill="none" stroke="currentColor" stroke-width="2"/></svg>' },
    { route: '/incidents', label: 'Active Incidents', icon: '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/></svg>' },
    { route: '/resources', label: 'Response Map', icon: '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20.5 3l-.16.03L15 5.1 9 3 3.36 4.9c-.21.07-.36.25-.36.48V20.5c0 .28.22.5.5.5l.16-.03L9 18.9l6 2.1 5.64-1.9c.21-.07.36-.25.36-.48V3.5c0-.28-.22-.5-.5-.5zM15 19l-6-2.11V5l6 2.11V19z"/></svg>' },
    { route: '/analytics', label: 'Analytics', icon: '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z"/></svg>' },
    { route: '/settings', label: 'System Admin', icon: '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.07.62-.07.94s.02.64.07.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z"/></svg>' }
  ];

  constructor(private router: Router) {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: any) => {
        this.activeRoute = event.url;
      });
  }

  navigate(route: string): void {
    this.router.navigate([route]);
  }
}
