import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, interval } from 'rxjs';
import { Incident, IncidentSeverity, IncidentStatus } from '../models/incident.model';
import { StatCard } from '../models/stats.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private incidentsSubject = new BehaviorSubject<Incident[]>(this.getInitialIncidents());
  public incidents$ = this.incidentsSubject.asObservable();

  private statsSubject = new BehaviorSubject<StatCard[]>(this.getInitialStats());
  public stats$ = this.statsSubject.asObservable();

  private criticalCountSubject = new BehaviorSubject<number>(3);
  public criticalCount$ = this.criticalCountSubject.asObservable();

  constructor() {
    // Simulate real-time updates
    interval(10000).subscribe(() => {
      this.simulateRealTimeUpdate();
    });
  }

  getIncidents(): Observable<Incident[]> {
    return this.incidents$;
  }

  getStats(): Observable<StatCard[]> {
    return this.stats$;
  }

  getCriticalCount(): Observable<number> {
    return this.criticalCount$;
  }

  getIncidentById(id: string): Incident | undefined {
    return this.incidentsSubject.value.find(inc => inc.id === id);
  }

  private getInitialIncidents(): Incident[] {
    return [
      {
        id: 'INC-2024-0892',
        title: 'Multi-Vehicle Collision - Highway 101',
        summary: 'AI Summary: Major traffic accident involving 5 vehicles. Multiple casualties reported. Caller indicates possible fire. Location confirmed via GPS at Highway 101 Mile Marker 47.',
        severity: IncidentSeverity.CRITICAL,
        status: IncidentStatus.DISPATCHED,
        location: 'Highway 101, MM 47',
        timestamp: new Date(Date.now() - 2 * 60 * 1000),
        aiConfidence: 94,
        assignedUnits: ['12', '15', '23']
      },
      {
        id: 'INC-2024-0891',
        title: 'Structure Fire with Entrapment',
        summary: 'AI Summary: Residential fire at 2847 Oak Street. Caller reports family members trapped on second floor. Heavy smoke visible. Fire department and ambulances requested immediately.',
        severity: IncidentSeverity.CRITICAL,
        status: IncidentStatus.ON_SITE,
        location: '2847 Oak Street',
        timestamp: new Date(Date.now() - 5 * 60 * 1000),
        assignedUnits: ['7', '9']
      },
      {
        id: 'INC-2024-0890',
        title: 'Cardiac Emergency - Downtown',
        summary: 'AI Summary: 67-year-old male experiencing chest pain and shortness of breath. Possible heart attack. Caller is family member. Patient conscious but in distress. Located at City Plaza, 4th Floor.',
        severity: IncidentSeverity.HIGH,
        status: IncidentStatus.EN_ROUTE,
        location: 'City Plaza, 4th Floor',
        timestamp: new Date(Date.now() - 8 * 60 * 1000),
        aiConfidence: 89,
        assignedUnits: ['8']
      },
      {
        id: 'INC-2024-0889',
        title: 'Gas Leak - Residential Area',
        summary: 'AI Summary: Strong gas odor reported at 1523 Maple Drive. Multiple residents evacuating. Utility company notified. Fire department requested for hazmat assessment and area securing.',
        severity: IncidentSeverity.HIGH,
        status: IncidentStatus.UNASSIGNED,
        location: '1523 Maple Drive',
        timestamp: new Date(Date.now() - 11 * 60 * 1000),
        aiConfidence: 91
      },
      {
        id: 'INC-2024-0888',
        title: 'Minor Vehicle Accident',
        summary: 'AI Summary: Two-vehicle fender bender at Main St & 5th Ave intersection. No injuries reported. Vehicles blocking right lane. Police assistance requested for traffic control and report.',
        severity: IncidentSeverity.MEDIUM,
        status: IncidentStatus.EN_ROUTE,
        location: 'Main St & 5th Ave',
        timestamp: new Date(Date.now() - 15 * 60 * 1000),
        assignedUnits: ['42']
      }
    ];
  }

  private getInitialStats(): StatCard[] {
    return [
      {
        label: 'Active Incidents',
        value: 23,
        change: '+5 from last hour',
        changeType: 'negative',
        accent: 'critical',
        icon: 'incidents'
      },
      {
        label: 'Units Deployed',
        value: 47,
        change: '18 available',
        changeType: 'neutral',
        accent: 'active',
        icon: 'units'
      },
      {
        label: 'Avg Response Time',
        value: '4.2m',
        change: '-12% improvement',
        changeType: 'positive',
        accent: 'success',
        icon: 'time'
      },
      {
        label: 'AI Confidence',
        value: '94%',
        change: 'Operational',
        changeType: 'neutral',
        accent: 'medium',
        icon: 'ai'
      }
    ];
  }

  private simulateRealTimeUpdate(): void {
    const currentCount = this.criticalCountSubject.value;
    const change = Math.random() > 0.5 ? 1 : -1;
    const newCount = Math.max(0, currentCount + change);
    this.criticalCountSubject.next(newCount);
  }
}
