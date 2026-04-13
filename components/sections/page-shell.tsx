import type { ReactNode } from 'react';

export function PageShell({ title, subtitle, children }: { title: string; subtitle: string; children: ReactNode }) {
  return (
    <div className="container-shell py-12">
      <div className="max-w-3xl">
        <h1 className="text-3xl font-extrabold md:text-4xl">{title}</h1>
        <p className="mt-3 text-gray-600">{subtitle}</p>
      </div>
      <div className="mt-8">{children}</div>
    </div>
  );
}
