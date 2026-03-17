import { notFound } from 'next/navigation';
import { jobs } from '@/lib/data/sample';
import { PageShell } from '@/components/sections/page-shell';

export default async function JobDetails({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const job = jobs.find((j) => j.id === id);
  if (!job) return notFound();

  return (
    <PageShell title={job.title} subtitle={`${job.trade} • ${job.location}`}>
      <div className="grid gap-6 md:grid-cols-3">
        <article className="card md:col-span-2">
          <h2 className="text-lg font-bold">Job Description</h2>
          <p className="mt-3 text-gray-600">Lead quality execution on-site, coordinate with the foreman, and ensure safety standards on all tasks.</p>
          <h3 className="mt-6 font-semibold">Required skills</h3>
          <ul className="mt-2 list-disc ps-5 text-sm text-gray-600"><li>Construction safety</li><li>Teamwork</li><li>Technical trade mastery</li></ul>
        </article>
        <aside className="card">
          <p><span className="font-semibold">Contract:</span> {job.type}</p>
          <p className="mt-2"><span className="font-semibold">Salary:</span> {job.salary}</p>
          <p className="mt-2"><span className="font-semibold">Experience:</span> {job.experience}</p>
          <button className="btn-primary mt-6 w-full">Apply Now</button>
        </aside>
      </div>
    </PageShell>
  );
}
