import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div>
      <div class="section-header">
        <div class="section-title">System Health Overview</div>
      </div>

      <div class="health-panel">
        <div class="health-grid">
          <div class="health-item">
            <div class="health-indicator status-success"></div>
            <div class="health-label">API Gateway</div>
            <div class="health-value">99.9%</div>
          </div>
          <div class="health-item">
            <div class="health-indicator status-success"></div>
            <div class="health-label">AI Engine</div>
            <div class="health-value">OPTIMAL</div>
          </div>
          <div class="health-item">
            <div class="health-indicator status-success"></div>
            <div class="health-label">Database</div>
            <div class="health-value">24ms</div>
          </div>
          <div class="health-item">
            <div class="health-indicator status-warning"></div>
            <div class="health-label">WebSocket</div>
            <div class="health-value">DEGRADED</div>
          </div>
          <div class="health-item">
            <div class="health-indicator status-success"></div>
            <div class="health-label">Cache Layer</div>
            <div class="health-value">98.7%</div>
          </div>
          <div class="health-item">
            <div class="health-indicator status-success"></div>
            <div class="health-label">Auth Service</div>
            <div class="health-value">ACTIVE</div>
          </div>
        </div>
      </div>

      <div class="section-header">
        <div class="section-title">AI Performance Metrics</div>
      </div>

      <div class="metrics-grid">
        <div class="metric-card">
          <div class="metric-title">Call Handling Accuracy</div>
          <div class="metric-chart">
            <div class="chart-placeholder"></div>
          </div>
          <div class="metric-value-large">94.2%</div>
        </div>

        <div class="metric-card">
          <div class="metric-title">Avg Confidence Score</div>
          <div class="metric-chart">
            <div class="chart-placeholder"></div>
          </div>
          <div class="metric-value-large">87.5%</div>
        </div>

        <div class="metric-card">
          <div class="metric-title">Escalation Rate</div>
          <div class="metric-chart">
            <div class="chart-placeholder"></div>
          </div>
          <div class="metric-value-large">5.8%</div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .health-panel {
      background: var(--color-bg-secondary);
      border: 1px solid var(--color-border);
      border-radius: 8px;
      padding: var(--space-lg);
      margin-bottom: var(--space-xl);
    }

    .health-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: var(--space-md);
    }

    .health-item {
      padding: var(--space-md);
      background: var(--color-bg-tertiary);
      border: 1px solid var(--color-border);
      border-radius: 6px;
      display: flex;
      align-items: center;
      gap: var(--space-md);
    }

    .health-indicator {
      width: 12px;
      height: 12px;
      border-radius: 50%;
    }

    .health-indicator.status-success {
      background: var(--color-success);
      box-shadow: 0 0 10px var(--color-success);
    }

    .health-indicator.status-warning {
      background: var(--color-warning);
      box-shadow: 0 0 10px var(--color-warning);
    }

    .health-indicator.status-critical {
      background: var(--color-critical);
      box-shadow: 0 0 10px var(--color-critical);
    }

    .health-label {
      flex: 1;
      font-weight: 500;
    }

    .health-value {
      font-family: var(--font-mono);
      font-weight: 600;
      color: var(--color-text-secondary);
    }

    .metrics-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: var(--space-lg);
      margin-bottom: var(--space-xl);
    }

    .metric-card {
      background: var(--color-bg-secondary);
      border: 1px solid var(--color-border);
      border-radius: 8px;
      padding: var(--space-lg);
    }

    .metric-title {
      font-size: 0.9rem;
      color: var(--color-text-secondary);
      margin-bottom: var(--space-md);
      text-transform: uppercase;
      letter-spacing: 1px;
      font-weight: 600;
    }

    .metric-chart {
      height: 150px;
      background: linear-gradient(180deg, rgba(6, 182, 212, 0.1) 0%, transparent 100%);
      border-radius: 4px;
      position: relative;
      overflow: hidden;
    }

    .chart-placeholder {
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      height: 60%;
      background: linear-gradient(90deg, 
        var(--color-active) 0%, 
        var(--color-active) 10%, 
        transparent 10%, transparent 15%,
        var(--color-active) 15%, 
        var(--color-active) 30%, 
        transparent 30%, transparent 35%,
        var(--color-active) 35%, 
        var(--color-active) 55%, 
        transparent 55%, transparent 60%,
        var(--color-active) 60%, 
        var(--color-active) 75%, 
        transparent 75%, transparent 80%,
        var(--color-active) 80%, 
        var(--color-active) 100%
      );
      opacity: 0.6;
    }

    .metric-value-large {
      font-size: 2rem;
      font-weight: 700;
      margin-top: var(--space-md);
      color: var(--color-text-primary);
    }
  `]
})
export class SettingsComponent {}
