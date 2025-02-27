export interface NewsItem {
  id: string;
  title: string;
  content: string;
  date: string;
  category: string;
  priority: 'normal' | 'important' | 'critical';
  isPinned: boolean;
}

export interface AuditFinding {
  id: string;
  year: number;
  auditee: string;
  finding: string;
  riskLevel: 'Low' | 'Moderate' | 'High' | 'Patuh Dengan Catatan';
  date: string;
  status: 'Open' | 'Closed' | 'In Progress';
  agreedAction: string;
}

export interface RiskData {
  name: string;
  value: number;
  color: string;
}

export interface ChartData {
  name: string;
  value: number;
}

export interface BarChartData {
  name: string;
  value: number;
  category: string;
}