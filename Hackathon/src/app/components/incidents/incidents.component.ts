import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../../services/data.service';
import { Incident, IncidentSeverity, IncidentStatus } from '../../models/incident.model';
import { BehaviorSubject, combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-incidents',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div>
      <div class="section-header">
        <div class="section-title">Active Incidents</div>
      </div>

      <div class="incident-queue">
        <div class="queue-filters">
          <button class="filter-btn" [class.active]="filterSubject.value === 'all'" (click)="setFilter('all')">All</button>
          <button class="filter-btn" [class.active]="filterSubject.value === 'critical'" (click)="setFilter('critical')">Critical</button>
          <button class="filter-btn" [class.active]="filterSubject.value === 'high'" (click)="setFilter('high')">High</button>
          <button class="filter-btn" [class.active]="filterSubject.value === 'unassigned'" (click)="setFilter('unassigned')">Unassigned</button>
        </div>

        <div class="incident-list">
          <div 
            *ngFor="let incident of filteredIncidents$ | async" 
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
    </div>
  `,
  styleUrls: ['../dashboard/dashboard.component.css']
})
export class IncidentsComponent {
  filterSubject = new BehaviorSubject<string>('all');
  incidents$ = this.dataService.getIncidents();
  
  filteredIncidents$ = combineLatest([this.incidents$, this.filterSubject]).pipe(
    map(([incidents, filter]) => {
      if (filter === 'all') return incidents;
      if (filter === 'critical') return incidents.filter(i => i.severity === IncidentSeverity.CRITICAL);
      if (filter === 'high') return incidents.filter(i => i.severity === IncidentSeverity.HIGH);
      if (filter === 'unassigned') return incidents.filter(i => i.status === IncidentStatus.UNASSIGNED);
      return incidents;
    })
  );

  constructor(private dataService: DataService) {}

  setFilter(filter: string): void {
    this.filterSubject.next(filter);
  }

  openIncidentDetail(id: string): void {
    console.log('Open incident:', id);
  }

  openAssignmentPanel(id: string): void {
    console.log('Assign units for:', id);
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
