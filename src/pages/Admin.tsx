import styles from './Dashboard.module.css';

export const Admin = () => {
    return (
        <div>
            <div className={styles.header}>
                <h1 className={styles.title}>System Administration</h1>
                <p className={styles.subtitle}>Platform Health & AI Analytics</p>
            </div>

            <div className={styles.statsGrid}>
                <div className={styles.statCard}>
                    <div className={styles.statValue} style={{ color: 'var(--color-status-success)' }}>99.9%</div>
                    <div className={styles.statLabel}>Uptime</div>
                </div>
                <div className={styles.statCard}>
                    <div className={styles.statValue}>45ms</div>
                    <div className={styles.statLabel}>API Latency</div>
                </div>
                <div className={styles.statCard}>
                    <div className={styles.statValue}>312</div>
                    <div className={styles.statLabel}>AI Agents Active</div>
                </div>
                <div className={styles.statCard}>
                    <div className={styles.statValue}>0</div>
                    <div className={styles.statLabel}>Errors (Last 1h)</div>
                </div>
            </div>

            <div className={styles.container}>
                <div className={styles.panel}>
                    <div className="glass-panel" style={{ padding: '24px' }}>
                        <h2 className="text-lg font-bold mb-4">AI Performance Metrics</h2>
                        <div className="space-y-4" style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                            <div>
                                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                                    <span>Call Intent Accuracy</span>
                                    <span>94%</span>
                                </div>
                                <div style={{ height: '8px', background: 'var(--color-bg-elevated)', borderRadius: '4px', overflow: 'hidden' }}>
                                    <div style={{ width: '94%', height: '100%', background: 'var(--color-primary)' }}></div>
                                </div>
                            </div>
                            <div>
                                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                                    <span>Auto-Escalation Rate</span>
                                    <span>12%</span>
                                </div>
                                <div style={{ height: '8px', background: 'var(--color-bg-elevated)', borderRadius: '4px', overflow: 'hidden' }}>
                                    <div style={{ width: '12%', height: '100%', background: 'var(--color-severity-high)' }}></div>
                                </div>
                            </div>
                            <div>
                                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                                    <span>Location Resolution Confidence</span>
                                    <span>88%</span>
                                </div>
                                <div style={{ height: '8px', background: 'var(--color-bg-elevated)', borderRadius: '4px', overflow: 'hidden' }}>
                                    <div style={{ width: '88%', height: '100%', background: 'var(--color-status-success)' }}></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={styles.panel}>
                    <div className="glass-panel" style={{ padding: '24px' }}>
                        <h2 className="text-lg font-bold mb-4">System Logs</h2>
                        <div style={{ fontFamily: 'monospace', fontSize: '0.8rem', color: 'var(--color-text-secondary)' }}>
                            <p>[15:02:11] AI Agent A-102 connected.</p>
                            <p>[15:02:45] API Health Check: OK</p>
                            <p>[15:03:12] Incident INC-004 received via Voice Gateway.</p>
                            <p>[15:03:14] Location triangulated: 40.74, -74.00</p>
                            <p>[15:03:15] Dispatch dispatched Unit-104.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
