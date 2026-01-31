import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { DashboardLayout } from './layouts/DashboardLayout';
import { Admin } from './pages/Admin';
import { Dashboard } from './pages/Dashboard';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DashboardLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="map" element={<div>Live Map Page (Construction)</div>} />
          <Route path="admin" element={<Admin />} />
          <Route path="incidents" element={<div>Incidents List (Construction)</div>} />
          <Route path="settings" element={<div>Settings (Construction)</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
