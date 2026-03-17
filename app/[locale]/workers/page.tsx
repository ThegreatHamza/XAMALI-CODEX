import Link from 'next/link';
import { PageShell } from '@/components/sections/page-shell';
import { workers } from '@/lib/data/sample';

export default async function WorkersPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return (
    <PageShell title="Available Workers" subtitle="Browse verified construction talent by trade, location, and availability.">
      <div className="mb-6 grid gap-3 rounded-2xl border border-gray-100 bg-gray-50 p-4 md:grid-cols-6">
        {['Trade', 'Experience', 'Location', 'Availability', 'Verified', 'Expected rate'].map((f) => (
          <input key={f} className="input" placeholder={f} />
        ))}
      </div>
      <div className="grid gap-5 md:grid-cols-3">
        {workers.map((worker) => (
          <article key={worker.id} className="card">
            <h3 className="text-lg font-bold">{worker.name}</h3>
            <p className="text-sm text-gray-600">{worker.trade} • {worker.location}</p>
            <p className="mt-2 text-sm">{worker.experience} years • {worker.rate}</p>
            <p className="mt-2 text-xs font-semibold text-green-700">{worker.availability}</p>
            <Link className="mt-4 inline-flex text-sm font-semibold text-brand-red" href={`/${locale}/workers/${worker.id}`}>Hire / View Profile</Link>
          </article>
        ))}
      </div>
    </PageShell>
  );
}
