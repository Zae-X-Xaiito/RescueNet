export interface StatCard {
  label: string;
  value: string | number;
  change?: string;
  changeType?: 'positive' | 'negative' | 'neutral';
  accent: 'critical' | 'active' | 'success' | 'medium';
  icon: string;
}

export interface SystemHealth {
  name: string;
  status: 'success' | 'warning' | 'critical';
  value: string;
}
