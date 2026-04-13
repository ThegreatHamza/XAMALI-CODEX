import Link from 'next/link';
import { PageShell } from '@/components/sections/page-shell';
import { jobs } from '@/lib/data/sample';

export default async function JobsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return (
    <PageShell title="Construction Jobs" subtitle="Discover open opportunities from trusted employers across Djibouti.">
      <div className="mb-6 grid gap-3 rounded-2xl border border-gray-100 bg-gray-50 p-4 md:grid-cols-6">
        {['Trade', 'Location', 'Salary', 'Experience', 'Contract type', 'Keyword'].map((f) => (
          <input key={f} className="input" placeholder={f} />
        ))}
      </div>
      <div className="grid gap-5">
        {jobs.map((job) => (
          <article key={job.id} className="card flex flex-col justify-between gap-4 md:flex-row md:items-center">
            <div>
              <h3 className="text-xl font-bold">{job.title}</h3>
              <p className="text-sm text-gray-600">{job.trade} • {job.location} • {job.experience}</p>
              <p className="mt-1 text-sm font-semibold text-brand-red">{job.salary}</p>
            </div>
            <Link href={`/${locale}/jobs/${job.id}`} className="btn-primary">Apply Now</Link>
          </article>
        ))}
      </div>
    </PageShell>
  );
}
