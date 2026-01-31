import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../../services/data.service';
import { StatCard } from '../../models/stats.model';
import { Incident } from '../../models/incident.model';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div>
      <!-- Stats Grid -->
      <div class="stats-grid">
        <div *ngFor="let stat of stats$ | async" class="stat-card accent-{{ stat.accent }}">
          <div class="stat-header">
            <div class="stat-label">{{ stat.label }}</div>
            <div class="stat-icon" [class]="'bg-' + stat.accent">
              <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path *ngIf="stat.icon === 'incidents'" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/>
                <path *ngIf="stat.icon === 'units'" d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z"/>
                <path *ngIf="stat.icon === 'time'" d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/>
                <path *ngIf="stat.icon === 'ai'" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
            </div>
          </div>
          <div class="stat-value">{{ stat.value }}</div>
          <div class="stat-change" [class]="stat.changeType">{{ stat.change }}</div>
        </div>
      </div>

      <!-- Incident Queue -->
      <div class="section-header">
        <div class="section-title">
          Priority Incident Queue
          <span class="section-badge">LIVE</span>
        </div>
      </div>

      <div class="incident-queue">
        <div class="queue-filters">
          <button class="filter-btn active">All</button>
          <button class="filter-btn">Critical</button>
          <button class="filter-btn">High</button>
          <button class="filter-btn">Unassigned</button>
          <button class="filter-btn">In Progress</button>
        </div>

        <div class="incident-list">
          <div 
            *ngFor="let incident of incidents$ | async" 
            class="incident-item severity-{{ incident.severity }}"
            (dblclick)="openIncidentDetail(incident.id)">
            <div class="incident-header">
              <span class="incident-id">#{{ incident.id }}</span>
              <span class="severity-badge severity-{{ incident.severity }}">
                {{ incident.severity | uppercase }}
              </span>
            </div>
            <h3 class="incident-title">{{ incident.title }}</h3>
            <p class="incident-summary">{{ incident.summary }}</p>
            <div *ngIf="incident.aiConfidence" class="confidence-meter">
              <span style="font-size: 0.85rem; color: var(--color-text-secondary);">AI Confidence:</span>
              <div class="confidence-bar">
                <div class="confidence-fill" [style.width.%]="incident.aiConfidence"></div>
              </div>
              <span style="font-size: 0.85rem; font-family: var(--font-mono);">{{ incident.aiConfidence }}%</span>
            </div>
            <div class="incident-meta">
              <div class="meta-item">
                <div class="meta-icon">
                  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                  </svg>
                </div>
                <span>{{ incident.location }}</span>
              </div>
              <div class="meta-item">
                <div class="meta-icon">
                  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/>
                  </svg>
                </div>
                <span>{{ getTimeAgo(incident.timestamp) }}</span>
              </div>
              <div class="meta-item">
                <span class="incident-status">
                  <span class="status-dot-inline" [class]="'status-' + getStatusClass(incident.status)"></span>
                  {{ incident.status }}
                </span>
              </div>
            </div>
            <div class="incident-actions">
              <button class="btn btn-primary" (click)="openIncidentDetail(incident.id)">View Details</button>
              <button class="btn btn-secondary" (click)="openAssignmentPanel(incident.id)">Assign Units</button>
            </div>
          </div>
        </div>
      </div>

      <!-- Map Section -->
      <div class="section-header">
        <div class="section-title">Live Response Map</div>
      </div>

      <div class="map-section">
        <div class="map-header">
          <div class="map-title">Real-Time Unit Tracking</div>
          <div class="map-controls">
            <button class="map-control-btn">Incidents</button>
            <button class="map-control-btn">Units</button>
            <button class="map-control-btn">Routes</button>
            <button class="map-control-btn">Fullscreen</button>
          </div>
        </div>
        <div class="map-container">
          <div class="map-placeholder">
            <div class="map-placeholder-icon">
              <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.5 3l-.16.03L15 5.1 9 3 3.36 4.9c-.21.07-.36.25-.36.48V20.5c0 .28.22.5.5.5l.16-.03L9 18.9l6 2.1 5.64-1.9c.21-.07.36-.25.36-.48V3.5c0-.28-.22-.5-.5-.5zM15 19l-6-2.11V5l6 2.11V19z"/>
              </svg>
            </div>
            <div>Interactive Map Integration</div>
            <div class="map-placeholder-text">Connect mapping service (Google Maps, Mapbox, etc.)</div>
          </div>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  stats$ = this.dataService.getStats();
  incidents$ = this.dataService.getIncidents();

  constructor(private dataService: DataService) {}

  ngOnInit(): void {}

  openIncidentDetail(id: string): void {
    // TODO: Implement modal
    console.log('Open incident:', id);
  }

  openAssignmentPanel(id: string): void {
    // TODO: Implement assignment panel
    console.log('Assign units for:', id);
  }

  getTimeAgo(timestamp: Date): string {
    const now = new Date();
    const diff = now.getTime() - new Date(timestamp).getTime();
    const minutes = Math.floor(diff / 60000);
    return `${minutes} min ago`;
  }

  getStatusClass(status: string): string {
    const statusMap: { [key: string]: string } = {
      'UNASSIGNED': 'neutral',
      'DISPATCHED': 'high',
      'EN ROUTE': 'active',
      'ON-SITE': 'success',
      'RESOLVED': 'success'
    };
    return statusMap[status] || 'neutral';
  }
}
