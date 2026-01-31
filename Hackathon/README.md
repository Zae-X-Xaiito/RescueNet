# RescueNet Command Center - Angular Application

This is an Angular-based emergency response management system converted from a single-page HTML application.

## Features

- **Dashboard**: Real-time overview with statistics and incident queue
- **Incidents Management**: View and manage active incidents with filtering
- **Resources**: Response map and unit tracking
- **Analytics**: Performance metrics and call volume analytics
- **System Admin**: System health monitoring and AI performance metrics

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm start
```

3. Open your browser and navigate to `http://localhost:4200`

### Build for Production

```bash
npm run build
```

The build artifacts will be stored in the `dist/` directory.

## Project Structure

```
src/
├── app/
│   ├── components/
│   │   ├── dashboard/       # Main dashboard component
│   │   ├── incidents/       # Incidents management
│   │   ├── resources/       # Resources and map view
│   │   ├── analytics/      # Analytics dashboard
│   │   ├── settings/       # System admin settings
│   │   ├── sidebar/        # Navigation sidebar
│   │   └── top-bar/        # Top header bar
│   ├── models/             # TypeScript interfaces and models
│   ├── services/           # Data services
│   ├── app.component.ts   # Root component
│   └── app.routes.ts       # Routing configuration
├── styles.css              # Global styles
└── index.html              # Main HTML file
```

## Key Components

- **DataService**: Manages application data and simulates real-time updates
- **Models**: TypeScript interfaces for type safety (Incident, StatCard, etc.)
- **Components**: Standalone Angular components with their own styles

## Technologies Used

- Angular 17 (Standalone Components)
- TypeScript
- RxJS for reactive programming
- CSS Custom Properties for theming

## Development Notes

- The application uses Angular standalone components (no NgModules)
- Real-time updates are simulated via RxJS intervals
- All styles use CSS custom properties for easy theming
- The original HTML structure and styling have been preserved

## Future Enhancements

- Implement modal components for incident details
- Add unit assignment functionality
- Integrate real mapping service (Google Maps/Mapbox)
- Add WebSocket support for real-time updates
- Implement authentication and user management
