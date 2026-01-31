import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-top-bar',
  standalone: true,
  imports: [CommonModule],
  template: `
    <header class="top-bar">
      <h1 class="page-title">{{ pageTitle }}</h1>
      <div class="top-bar-actions">
        <div class="alert-badge">
          <svg class="alert-icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="10"/>
          </svg>
          {{ criticalCount$ | async }} CRITICAL
        </div>
        <div class="user-profile">
          <div class="user-avatar">JD</div>
          <div class="user-info">
            <div class="user-name">Jordan Davis</div>
            <div class="user-role">DISPATCHER_LEAD</div>
          </div>
        </div>
      </div>
    </header>
  `,
  styles: [`
    .top-bar {
      height: 64px;
      background: var(--color-bg-secondary);
      border-bottom: 1px solid var(--color-border);
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 var(--space-xl);
      position: relative;
    }

    .page-title {
      font-size: 1.5rem;
      font-weight: 600;
      letter-spacing: 0.5px;
    }

    .top-bar-actions {
      display: flex;
      align-items: center;
      gap: var(--space-lg);
    }

    .alert-badge {
      position: relative;
      padding: var(--space-sm) var(--space-md);
      background: rgba(239, 68, 68, 0.15);
      border: 1px solid var(--color-critical);
      border-radius: 6px;
      font-family: var(--font-mono);
      font-size: 0.85rem;
      font-weight: 600;
      color: var(--color-critical);
      cursor: pointer;
      transition: all 0.2s ease;
    }

    .alert-badge:hover {
      background: rgba(239, 68, 68, 0.25);
      box-shadow: 0 0 15px rgba(239, 68, 68, 0.4);
    }

    .alert-icon {
      width: 12px;
      height: 12px;
      display: inline-block;
      vertical-align: middle;
      margin-right: 4px;
      fill: currentColor;
    }

    .user-profile {
      display: flex;
      align-items: center;
      gap: var(--space-md);
      padding: var(--space-sm) var(--space-md);
      background: var(--color-bg-tertiary);
      border-radius: 8px;
      cursor: pointer;
      transition: all 0.2s ease;
    }

    .user-profile:hover {
      background: var(--color-bg-elevated);
    }

    .user-avatar {
      width: 36px;
      height: 36px;
      border-radius: 50%;
      background: linear-gradient(135deg, var(--color-accent-blue), var(--color-accent-purple));
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 700;
      font-size: 0.9rem;
    }

    .user-info {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
    }

    .user-name {
      font-weight: 600;
      font-size: 0.9rem;
    }

    .user-role {
      font-size: 0.75rem;
      color: var(--color-text-secondary);
      font-family: var(--font-mono);
    }
  `]
})
export class TopBarComponent {
  pageTitle = 'Dispatcher Command Center';
  criticalCount$ = this.dataService.getCriticalCount();

  constructor(private dataService: DataService) {}
}
