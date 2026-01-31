export enum IncidentSeverity {
  CRITICAL = 'critical',
  HIGH = 'high',
  MEDIUM = 'medium',
  LOW = 'low'
}

export enum IncidentStatus {
  UNASSIGNED = 'UNASSIGNED',
  DISPATCHED = 'DISPATCHED',
  EN_ROUTE = 'EN ROUTE',
  ON_SITE = 'ON-SITE',
  RESOLVED = 'RESOLVED'
}

export interface Incident {
  id: string;
  title: string;
  summary: string;
  severity: IncidentSeverity;
  status: IncidentStatus;
  location: string;
  timestamp: Date;
  aiConfidence?: number;
  assignedUnits?: string[];
  timeline?: TimelineEvent[];
}

export interface TimelineEvent {
  time: Date;
  content: string;
  type: 'critical' | 'success' | 'info';
}

export interface ResponderUnit {
  id: string;
  status: 'available' | 'assigned' | 'unavailable';
  type: string;
}
