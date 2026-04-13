import { PageShell } from '@/components/sections/page-shell';

export default function ContactPage() {
  return (
    <PageShell title="Contact XAMALI" subtitle="Need help? Our team is ready to support workers and employers.">
      <div className="grid gap-6 md:grid-cols-2">
        <form className="card space-y-4">
          <input className="input" placeholder="Full name" />
          <input className="input" placeholder="Email" />
          <textarea className="input min-h-36" placeholder="How can we help?" />
          <button className="btn-primary" type="submit">Send message</button>
        </form>
        <div className="space-y-4">
          <div className="card"><p className="font-semibold">Office</p><p className="text-sm text-gray-600">Djibouti City, Republic of Djibouti</p></div>
          <div className="card"><p className="font-semibold">Map</p><div className="mt-2 h-44 rounded-xl bg-gray-100" /></div>
          <div className="card"><p className="font-semibold">FAQ highlight</p><p className="text-sm text-gray-600">Most responses are provided within 24 hours.</p></div>
        </div>
      </div>
    </PageShell>
  );
}
