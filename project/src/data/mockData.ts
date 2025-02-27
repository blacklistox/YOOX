import { NewsItem, AuditFinding, RiskData, BarChartData } from '../types';

export const newsItems: NewsItem[] = [
  {
    id: '1',
    title: 'Perubahan Kebijakan Pembiayaan Syariah',
    content: 'Bank Indonesia telah mengeluarkan kebijakan baru terkait pembiayaan syariah yang akan berlaku mulai bulan depan.',
    date: '2025-05-15',
    category: 'Kebijakan',
    priority: 'critical',
    isPinned: true
  },
  {
    id: '2',
    title: 'Laporan Audit Triwulan Pertama 2025',
    content: 'Laporan audit triwulan pertama 2025 telah selesai dan menunjukkan peningkatan kepatuhan sebesar 15%.',
    date: '2025-05-10',
    category: 'Audit',
    priority: 'important',
    isPinned: true
  },
  {
    id: '3',
    title: 'Pelatihan Kepatuhan Syariah untuk Karyawan Baru',
    content: 'Pelatihan kepatuhan syariah untuk karyawan baru akan diadakan pada tanggal 20 Mei 2025.',
    date: '2025-05-08',
    category: 'Pelatihan',
    priority: 'normal',
    isPinned: false
  },
  {
    id: '4',
    title: 'Pembaruan Sistem Manajemen Risiko',
    content: 'Sistem manajemen risiko telah diperbarui dengan fitur-fitur baru untuk meningkatkan efisiensi.',
    date: '2025-05-05',
    category: 'Sistem',
    priority: 'important',
    isPinned: false
  },
  {
    id: '5',
    title: 'Rapat Dewan Pengawas Syariah',
    content: 'Rapat Dewan Pengawas Syariah akan diadakan pada tanggal 25 Mei 2025 untuk membahas perkembangan terbaru.',
    date: '2025-05-03',
    category: 'Rapat',
    priority: 'normal',
    isPinned: false
  }
];

export const auditFindings: AuditFinding[] = [
  {
    id: '1',
    year: 2025,
    auditee: 'Divisi Pembiayaan',
    finding: 'Ketidaksesuaian dokumentasi akad pembiayaan',
    riskLevel: 'Moderate',
    date: '2025-04-15',
    status: 'Open',
    agreedAction: 'Revisi template dokumentasi akad pembiayaan'
  },
  {
    id: '2',
    year: 2025,
    auditee: 'Divisi Operasional',
    finding: 'Keterlambatan pelaporan transaksi harian',
    riskLevel: 'Low',
    date: '2025-04-10',
    status: 'Closed',
    agreedAction: 'Implementasi sistem pelaporan otomatis'
  },
  {
    id: '3',
    year: 2025,
    auditee: 'Divisi IT',
    finding: 'Kelemahan pada sistem keamanan data nasabah',
    riskLevel: 'High',
    date: '2025-04-05',
    status: 'In Progress',
    agreedAction: 'Peningkatan sistem keamanan dan enkripsi data'
  },
  {
    id: '4',
    year: 2025,
    auditee: 'Divisi Keuangan',
    finding: 'Ketidaksesuaian pencatatan bagi hasil',
    riskLevel: 'Moderate',
    date: '2025-03-28',
    status: 'Open',
    agreedAction: 'Perbaikan sistem perhitungan bagi hasil'
  },
  {
    id: '5',
    year: 2025,
    auditee: 'Divisi Kepatuhan',
    finding: 'Keterlambatan pelaporan kepatuhan syariah',
    riskLevel: 'Patuh Dengan Catatan',
    date: '2025-03-20',
    status: 'Closed',
    agreedAction: 'Penyusunan jadwal pelaporan yang lebih terstruktur'
  }
];

export const riskTypeData: RiskData[] = [
  { name: 'Operasional', value: 35, color: '#8B5A2B' },
  { name: 'Pembiayaan', value: 25, color: '#D2B48C' },
  { name: 'Strategik', value: 15, color: '#FFD700' },
  { name: 'Kepatuhan', value: 10, color: '#87CEEB' },
  { name: 'Reputasi', value: 10, color: '#FF6347' },
  { name: 'Hukum', value: 5, color: '#DDA0DD' }
];

export const riskRatingData: RiskData[] = [
  { name: 'Moderate', value: 40, color: '#8B5A2B' },
  { name: 'Moderate to High', value: 25, color: '#D2B48C' },
  { name: 'High', value: 15, color: '#87CEEB' },
  { name: 'Low to Moderate', value: 10, color: '#FF6347' },
  { name: 'Patuh Dengan Catatan', value: 7, color: '#DDA0DD' },
  { name: 'Low', value: 3, color: '#FFD700' }
];

export const monthlyFindingsData: BarChartData[] = [
  { name: 'Jan', value: 11, category: 'Moderate' },
  { name: 'Feb', value: 7, category: 'Moderate to High' },
  { name: 'Mar', value: 16, category: 'Low' },
  { name: 'Apr', value: 14, category: 'High' },
  { name: 'May', value: 8, category: 'Moderate' },
  { name: 'Jun', value: 10, category: 'Low to Moderate' },
  { name: 'Jul', value: 6, category: 'High' },
  { name: 'Aug', value: 9, category: 'Moderate' },
  { name: 'Sep', value: 4, category: 'Patuh Dengan Catatan' },
  { name: 'Oct', value: 7, category: 'Moderate' },
  { name: 'Nov', value: 5, category: 'Low' },
  { name: 'Dec', value: 3, category: 'Moderate to High' }
];

export const kpiData = [
  { name: 'Kepatuhan', target: 95, actual: 92 },
  { name: 'Audit', target: 100, actual: 85 },
  { name: 'Risiko', target: 80, actual: 75 },
  { name: 'Pelaporan', target: 90, actual: 88 }
];

export const totalFindings = 311;
export const openFindings = 124;
export const closedFindings = 187;