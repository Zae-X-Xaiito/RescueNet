import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-resources',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div>
      <div class="section-header">
        <div class="section-title">Response Map & Resources</div>
      </div>

      <div class="map-section">
        <div class="map-header">
          <div class="map-title">Real-Time Unit Tracking</div>
          <div class="map-controls">
            <button class="map-control-btn">Incidents</button>
            <button class="map-control-btn">Units</button>
            <button class="map-control-btn">Routes</button>
          </div>
        </div>
        <div class="map-container">
          <div class="map-placeholder">
            <div class="map-placeholder-icon">
              <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.5 3l-.16.03L15 5.1 9 3 3.36 4.9c-.21.07-.36.25-.36.48V20.5c0 .28.22.5.5.5l.16-.03L9 18.9l6 2.1 5.64-1.9c.21-.07.36-.25.36-.48V3.5c0-.28-.22-.5-.5-.5zM15 19l-6-2.11V5l6 2.11V19z"/>
              </svg>
            </div>
            <div>Interactive Map Integration</div>
            <div class="map-placeholder-text">Connect mapping service (Google Maps, Mapbox, etc.)</div>
          </div>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['../dashboard/dashboard.component.css']
})
export class ResourcesComponent {}
