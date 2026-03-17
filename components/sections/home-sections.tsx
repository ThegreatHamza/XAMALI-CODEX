import Link from 'next/link';
import { jobs, testimonials, workers } from '@/lib/data/sample';
import type { Locale } from '@/lib/i18n/config';

export function HomeSections({ locale }: { locale: Locale }) {
  return (
    <div className="container-shell space-y-14 pb-20">
      <section className="grid gap-6 md:grid-cols-3">
        {['Verified workers', 'Reliable employers', 'Fast hiring flow'].map((item) => (
          <div key={item} className="card">
            <h3 className="text-lg font-bold">{item}</h3>
            <p className="mt-2 text-sm text-gray-600">Built with profile verification, ratings, and secure application tracking.</p>
          </div>
        ))}
      </section>

      <section>
        <div className="mb-6 flex items-end justify-between">
          <h2 className="text-2xl font-bold">Featured Jobs</h2>
          <Link href={`/${locale}/jobs`} className="text-sm font-semibold text-brand-red">View all</Link>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {jobs.map((job) => (
            <article key={job.id} className="card">
              <p className="text-xs text-gray-500">{job.trade} • {job.location}</p>
              <h3 className="mt-2 text-lg font-semibold">{job.title}</h3>
              <p className="mt-2 text-sm text-gray-600">{job.type} • {job.salary}</p>
              <Link className="mt-4 inline-flex text-sm font-semibold text-brand-red" href={`/${locale}/jobs/${job.id}`}>See details →</Link>
            </article>
          ))}
        </div>
      </section>

      <section>
        <h2 className="mb-6 text-2xl font-bold">Featured Workers</h2>
        <div className="grid gap-5 md:grid-cols-3">
          {workers.map((worker) => (
            <article key={worker.id} className="card">
              <h3 className="text-lg font-semibold">{worker.name}</h3>
              <p className="mt-1 text-sm text-gray-600">{worker.trade} • {worker.location}</p>
              <p className="mt-2 text-sm">{worker.experience} years • {worker.rate}</p>
              <Link className="mt-4 inline-flex text-sm font-semibold text-brand-red" href={`/${locale}/workers/${worker.id}`}>View profile →</Link>
            </article>
          ))}
        </div>
      </section>

      <section>
        <h2 className="mb-6 text-2xl font-bold">Testimonials</h2>
        <div className="grid gap-5 md:grid-cols-2">
          {testimonials.map((t) => (
            <article key={t.name} className="card">
              <p className="italic text-gray-700">“{t.quote}”</p>
              <p className="mt-3 text-sm font-semibold">{t.name} — {t.role}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
