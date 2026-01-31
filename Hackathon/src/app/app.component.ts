import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { TopBarComponent } from './components/top-bar/top-bar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SidebarComponent, TopBarComponent],
  template: `
    <div class="app-container">
      <app-sidebar></app-sidebar>
      <main class="main-content">
        <app-top-bar></app-top-bar>
        <div class="dashboard-content">
          <router-outlet></router-outlet>
        </div>
      </main>
    </div>
  `,
  styles: [`
    .app-container {
      display: flex;
      height: 100vh;
      position: relative;
    }

    .main-content {
      flex: 1;
      display: flex;
      flex-direction: column;
      overflow: hidden;
    }

    .dashboard-content {
      flex: 1;
      overflow-y: auto;
      padding: var(--space-xl);
    }
  `]
})
export class AppComponent {
  title = 'RescueNet Command Center';
}
