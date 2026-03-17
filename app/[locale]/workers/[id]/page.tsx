import { notFound } from 'next/navigation';
import { workers } from '@/lib/data/sample';
import { PageShell } from '@/components/sections/page-shell';

export default async function WorkerDetails({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const worker = workers.find((w) => w.id === id);
  if (!worker) return notFound();

  return (
    <PageShell title={worker.name} subtitle={`${worker.trade} • ${worker.location}`}>
      <div className="grid gap-6 md:grid-cols-3">
        <article className="card md:col-span-2">
          <h2 className="text-lg font-bold">Profile Summary</h2>
          <p className="mt-3 text-gray-600">Experienced {worker.trade.toLowerCase()} with strong safety discipline and quality delivery across residential and infrastructure projects.</p>
          <h3 className="mt-5 font-semibold">Skills</h3>
          <div className="mt-2 flex flex-wrap gap-2">{['Safety', 'Teamwork', 'Blueprint reading', 'Site discipline'].map((skill) => <span key={skill} className="rounded-full bg-gray-100 px-3 py-1 text-xs">{skill}</span>)}</div>
        </article>
        <aside className="card">
          <p><span className="font-semibold">Experience:</span> {worker.experience} years</p>
          <p className="mt-2"><span className="font-semibold">Expected rate:</span> {worker.rate}</p>
          <p className="mt-2"><span className="font-semibold">Availability:</span> {worker.availability}</p>
          <button className="btn-primary mt-6 w-full">Contact Worker</button>
        </aside>
      </div>
    </PageShell>
  );
}
