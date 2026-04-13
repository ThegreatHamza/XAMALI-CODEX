import { PageShell } from '@/components/sections/page-shell';

export default function AboutPage() {
  return (
    <PageShell
      title="Empowering construction talent in Djibouti"
      subtitle="XAMALI makes hiring faster, safer, and more transparent for workers and employers through verified profiles and quality matching."
    >
      <div className="grid gap-4 md:grid-cols-4">
        {['Reliability', 'Speed', 'Local Opportunity', 'Quality Hiring'].map((value) => (
          <div className="card" key={value}>
            <h3 className="font-bold">{value}</h3>
            <p className="mt-2 text-sm text-gray-600">We prioritize professional results and trusted relationships.</p>
          </div>
        ))}
      </div>
    </PageShell>
  );
}
