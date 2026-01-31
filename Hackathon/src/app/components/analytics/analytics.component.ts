import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-analytics',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div>
      <div class="section-header">
        <div class="section-title">Analytics Dashboard</div>
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

      <div class="section-header">
        <div class="section-title">Call Volume Analytics</div>
      </div>

      <div class="metrics-grid">
        <div class="metric-card">
          <div class="metric-title">Calls Today (24h)</div>
          <div class="chart-container">
            <div class="chart-line">
              <div class="chart-bar" style="height: 45%;"></div>
              <div class="chart-bar" style="height: 30%;"></div>
              <div class="chart-bar" style="height: 60%;"></div>
              <div class="chart-bar" style="height: 80%;"></div>
              <div class="chart-bar" style="height: 70%;"></div>
              <div class="chart-bar" style="height: 90%;"></div>
              <div class="chart-bar" style="height: 75%;"></div>
              <div class="chart-bar" style="height: 65%;"></div>
              <div class="chart-bar" style="height: 55%;"></div>
              <div class="chart-bar" style="height: 50%;"></div>
              <div class="chart-bar" style="height: 40%;"></div>
              <div class="chart-bar" style="height: 35%;"></div>
            </div>
          </div>
          <div class="metric-value-large">1,247</div>
          <div style="font-size: 0.85rem; color: var(--color-text-secondary); margin-top: var(--space-sm);">+12% vs yesterday</div>
        </div>
      </div>
    </div>
  `,
  styles: [`
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

    .chart-container {
      position: relative;
      height: 200px;
      margin-top: var(--space-md);
    }

    .chart-line {
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      height: 80%;
      display: flex;
      align-items: flex-end;
      justify-content: space-around;
      padding: 0 var(--space-sm);
    }

    .chart-bar {
      flex: 1;
      margin: 0 2px;
      background: linear-gradient(to top, var(--color-active), var(--color-accent-purple));
      border-radius: 4px 4px 0 0;
      min-height: 10%;
      transition: all 0.3s ease;
    }

    .chart-bar:hover {
      opacity: 0.8;
    }
  `]
})
export class AnalyticsComponent {}
