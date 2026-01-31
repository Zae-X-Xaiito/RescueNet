import { Incident } from '../types';
import { Clock, Phone, MapPin } from 'lucide-react';
import styles from './IncidentQueue.module.css';

interface IncidentQueueProps {
    incidents: Incident[];
    onSelect: (id: string) => void;
}

export const IncidentQueue = ({ incidents, onSelect }: IncidentQueueProps) => {
    return (
        <div className={styles.container}>
            {incidents.map((incident) => (
                <div
                    key={incident.id}
                    className={`${styles.card} ${styles[incident.severity.toLowerCase()]}`}
                    onClick={() => onSelect(incident.id)}
                >
                    <div className={styles.header}>
                        <span className={`text-${incident.severity.toLowerCase()} ${styles.severityBadge}`}>
                            {incident.severity}
                        </span>
                        <span className={styles.status}>{incident.status}</span>
                        <span className={styles.time}>
                            <Clock size={14} />
                            {new Date(incident.timestamp).toLocaleTimeString()}
                        </span>
                    </div>

                    <h3 className={styles.type}>{incident.type}</h3>
                    <p className={styles.summary}>{incident.summary}</p>

                    <div className={styles.meta}>
                        <div className={styles.metaItem}>
                            <Phone size={14} />
                            {incident.callerName}
                        </div>
                        <div className={styles.metaItem}>
                            <MapPin size={14} />
                            {incident.location.address}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};
