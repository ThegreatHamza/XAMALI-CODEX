import { Metrics } from '@/components/dashboard/metrics';
import { PageShell } from '@/components/sections/page-shell';

export default function EmployerDashboard() {
  return (
    <PageShell title="Employer Dashboard" subtitle="Post jobs, review applicants, and contact workers.">
      <Metrics items={[{ label: 'Active jobs', value: '6' }, { label: 'Applicants', value: '54' }, { label: 'Saved workers', value: '19' }]} />
      <div className="mt-6 card"><h3 className="font-bold">Hiring pipeline</h3><p className="mt-2 text-sm text-gray-600">Track invited candidates, interviews, and accepted offers.</p></div>
    </PageShell>
  );
}
