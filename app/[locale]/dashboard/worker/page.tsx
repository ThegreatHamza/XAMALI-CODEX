import { Metrics } from '@/components/dashboard/metrics';
import { PageShell } from '@/components/sections/page-shell';

export default function WorkerDashboard() {
  return (
    <PageShell title="Worker Dashboard" subtitle="Manage your profile, applications, saved jobs, and notifications.">
      <Metrics items={[{ label: 'Applications sent', value: '12' }, { label: 'Saved jobs', value: '8' }, { label: 'Messages', value: '5' }]} />
      <div className="mt-6 card"><h3 className="font-bold">Quick actions</h3><p className="mt-2 text-sm text-gray-600">Update availability, upload certifications, and browse new jobs.</p></div>
    </PageShell>
  );
}
