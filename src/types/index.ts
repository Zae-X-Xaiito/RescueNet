export type IncidentStatus = 'Received' | 'Dispatched' | 'En Route' | 'On Scene' | 'Resolved';
export type IncidentSeverity = 'Critical' | 'High' | 'Medium' | 'Low';

export interface Location {
  lat: number;
  lng: number;
  address: string;
}

export interface Incident {
  id: string;
  timestamp: string;
  callerName: string;
  callerPhone: string;
  type: string; // e.g., "Fire", "Medical", "Traffic"
  severity: IncidentSeverity;
  status: IncidentStatus;
  location: Location;
  summary: string; // AI generated summary
  assignedUnitId?: string;
  notes?: string;
}

export interface RescueUnit {
  id: string;
  name: string;
  type: 'Ambulance' | 'FireTruck' | 'Police' | 'Drone';
  status: 'Available' | 'Busy' | 'Offline';
  location: Location;
}
