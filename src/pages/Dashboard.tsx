import { useEffect, useState } from 'react';
import { fetchIncidents, fetchUnits } from '../services/api';
import { Incident, RescueUnit } from '../types';
import { IncidentQueue } from '../components/IncidentQueue';
import { MapPreview } from '../components/Map';
import styles from './Dashboard.module.css';

export const Dashboard = () => {
    const [incidents, setIncidents] = useState<Incident[]>([]);
    const [, setUnits] = useState<RescueUnit[]>([]);
    const [selectedIncidentId, setSelectedIncidentId] = useState<string | null>(null);

    useEffect(() => {
        const loadData = () => {
            fetchIncidents().then((data) => {
                setIncidents(data);
                // Only set default selection on first load
                if (!selectedIncidentId && data.length > 0) {
                    setSelectedIncidentId(data[0].id);
                }
            });
            fetchUnits().then(setUnits);
        };

        loadData();
        const interval = setInterval(loadData, 30000); // Poll every 30s

        return () => clearInterval(interval);
    }, [selectedIncidentId]);

    const activeIncidents = incidents.filter(i => i.status !== 'Resolved');
    const criticalCount = incidents.filter(i => i.severity === 'Critical').length;

    const selectedIncident = incidents.find(i => i.id === selectedIncidentId);
    const mapCenter = selectedIncident ? selectedIncident.location : undefined;

    const mapMarkers = incidents.map(inc => ({
        id: inc.id,
        position: inc.location,
        title: inc.type,
        type: 'incident'
    }));

    return (
        <div>
            <div className={styles.header}>
                <h1 className={styles.title}>Command Center</h1>
                <p className={styles.subtitle}>{new Date().toLocaleDateString(undefined, { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</p>
            </div>

            <div className={styles.statsGrid}>
                <div className={styles.statCard}>
                    <div className={styles.statValue}>{activeIncidents.length}</div>
                    <div className={styles.statLabel}>Active Incidents</div>
                </div>
                <div className={styles.statCard}>
                    <div className={styles.statValue} style={{ color: 'var(--color-severity-critical)' }}>{criticalCount}</div>
                    <div className={styles.statLabel}>Critical</div>
                </div>
                <div className={styles.statCard}>
                    <div className={styles.statValue}>12</div>
                    <div className={styles.statLabel}>Units Available</div>
                </div>
                <div className={styles.statCard}>
                    <div className={styles.statValue} style={{ color: 'var(--color-status-success)' }}>98%</div>
                    <div className={styles.statLabel}>System Health</div>
                </div>
            </div>

            <div className={styles.container}>
                <div className={styles.panel}>
                    <h2 className="text-lg font-bold mb-4">Incident Queue</h2>
                    <div className={styles.scrollArea}>
                        <IncidentQueue incidents={incidents} onSelect={setSelectedIncidentId} />
                    </div>
                </div>

                <div className={styles.panel}>
                    <h2 className="text-lg font-bold mb-4">Live Operational Map</h2>
                    <MapPreview markers={mapMarkers} center={mapCenter} />

                    <div className="glass-panel" style={{ padding: '24px', flex: 1, marginTop: '24px' }}>
                        <h3 className="text-lg font-bold">Selected Incident Details</h3>
                        {selectedIncident ? (
                            <div style={{ marginTop: '16px' }}>
                                <p><strong>ID:</strong> {selectedIncident.id}</p>
                                <p><strong>Type:</strong> {selectedIncident.type}</p>
                                <p><strong>Location:</strong> {selectedIncident.location.address}</p>
                                <p><strong>Summary:</strong> {selectedIncident.summary}</p>
                            </div>
                        ) : (
                            <p className="text-muted">Select an incident to view details.</p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};
