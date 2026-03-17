'use client';

import { motion } from 'framer-motion';
import type { Locale } from '@/lib/i18n/config';
import { getMessages } from '@/lib/i18n/messages';
import Link from 'next/link';

export function Hero({ locale }: { locale: Locale }) {
  const t = getMessages(locale);
  return (
    <section className="container-shell grid items-center gap-10 py-16 md:grid-cols-2 md:py-24">
      <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}>
        <p className="mb-4 inline-flex rounded-full bg-red-50 px-4 py-1 text-sm font-semibold text-brand-red">Construction Talent Marketplace • Djibouti</p>
        <h1 className="text-4xl font-extrabold leading-tight md:text-5xl">{t.hero.title}</h1>
        <p className="mt-4 text-lg text-gray-600">{t.hero.subtitle}</p>
        <div className="mt-7 flex flex-wrap gap-3">
          <Link href={`/${locale}/jobs`} className="btn-primary">{t.hero.workerCta}</Link>
          <Link href={`/${locale}/workers`} className="btn-secondary">{t.hero.employerCta}</Link>
        </div>
      </motion.div>
      <motion.div initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} className="card bg-gradient-to-br from-red-50 to-white">
        <p className="mb-2 text-sm font-semibold text-gray-500">Smart Search</p>
        <input className="input" placeholder="Search jobs, workers, skills..." />
        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          <input className="input" placeholder="Trade" />
          <input className="input" placeholder="Location" />
          <button className="btn-primary sm:col-span-2">{t.common.search}</button>
        </div>
      </motion.div>
    </section>
  );
}
