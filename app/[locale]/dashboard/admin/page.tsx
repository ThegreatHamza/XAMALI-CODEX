import { Metrics } from '@/components/dashboard/metrics';
import { PageShell } from '@/components/sections/page-shell';

export default function AdminDashboard() {
  return (
    <PageShell title="Admin Dashboard" subtitle="Moderate the marketplace, verify users, and monitor platform analytics.">
      <Metrics items={[{ label: 'Total users', value: '2,430' }, { label: 'Pending verifications', value: '38' }, { label: 'Reported content', value: '4' }]} />
      <div className="mt-6 card"><h3 className="font-bold">Admin controls</h3><p className="mt-2 text-sm text-gray-600">Manage featured content, job approvals, and trust & safety workflows.</p></div>
    </PageShell>
  );
}
