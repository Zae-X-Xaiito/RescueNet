import { Incident, RescueUnit } from '../types';

const SHEET_ID = '16DdIwQYIDzCtQhZE7pr9oW2wEkj-7SzyxLrZ898AJvc';
const CSV_URL = `https://docs.google.com/spreadsheets/d/${SHEET_ID}/gviz/tq?tqx=out:csv`;

// Mock Data for development and fallback
export const MOCK_INCIDENTS: Incident[] = [
    {
        id: 'INC-001',
        timestamp: new Date().toISOString(),
        callerName: 'Jane Doe',
        callerPhone: '555-0101',
        type: 'Medical Emergency',
        severity: 'Critical',
        status: 'Received',
        location: { lat: 40.7128, lng: -74.0060, address: '123 Broadway, NY' },
        summary: 'Cardiac arrest reported. Patient is 60yo male, unconscious.',
    },
    {
        id: 'INC-002',
        timestamp: new Date(Date.now() - 1000 * 60 * 15).toISOString(),
        callerName: 'John Smith',
        callerPhone: '555-0102',
        type: 'Fire',
        severity: 'High',
        status: 'Dispatched',
        location: { lat: 40.7282, lng: -73.9942, address: '456 Market St, NY' },
        summary: 'Structure fire visible from street. Smoke reported on 3rd floor.',
        assignedUnitId: 'UNIT-101'
    },
    {
        id: 'INC-003',
        timestamp: new Date(Date.now() - 1000 * 60 * 45).toISOString(),
        callerName: 'System',
        callerPhone: 'N/A',
        type: 'Traffic Accident',
        severity: 'Medium',
        status: 'En Route',
        location: { lat: 40.7589, lng: -73.9851, address: 'Times Square, NY' },
        summary: 'Minor collision involving two vehicles. No serious injuries reported.',
        assignedUnitId: 'UNIT-102'
    }
];

export const MOCK_UNITS: RescueUnit[] = [
    { id: 'UNIT-101', name: 'Engine 55', type: 'FireTruck', status: 'Busy', location: { lat: 40.7282, lng: -73.9942, address: '456 Market St' } },
    { id: 'UNIT-102', name: 'Amb 12', type: 'Ambulance', status: 'Busy', location: { lat: 40.7589, lng: -73.9851, address: 'Times Square' } },
    { id: 'UNIT-103', name: 'Patrol 1', type: 'Police', status: 'Available', location: { lat: 40.7300, lng: -74.0000, address: 'Patrolling' } },
    { id: 'UNIT-104', name: 'Drone A1', type: 'Drone', status: 'Available', location: { lat: 40.7400, lng: -74.0100, address: 'Base Station' } },
];

export const fetchIncidents = async (): Promise<Incident[]> => {
    // TODO: Implement actual CSV fetching and parsing
    // try {
    //   const response = await fetch(CSV_URL);
    //   const text = await response.text();
    //   // parseCSV(text)
    // } catch (e) { ... }

    return new Promise((resolve) => {
        setTimeout(() => resolve(MOCK_INCIDENTS), 500);
    });
};

export const fetchUnits = async (): Promise<RescueUnit[]> => {
    return new Promise((resolve) => {
        setTimeout(() => resolve(MOCK_UNITS), 500);
    });
};
