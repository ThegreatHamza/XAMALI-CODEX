import Link from 'next/link';
import { getMessages } from '@/lib/i18n/messages';
import type { Locale } from '@/lib/i18n/config';
import { LanguageSwitcher } from './language-switcher';

export function Header({ locale }: { locale: Locale }) {
  const t = getMessages(locale);
  return (
    <header className="sticky top-0 z-20 border-b border-gray-100 bg-white/95 backdrop-blur">
      <div className="container-shell flex items-center justify-between py-4">
        <Link href={`/${locale}`} className="text-2xl font-extrabold text-brand-red">{t.brand}</Link>
        <nav className="hidden gap-6 md:flex">
          {['home', 'about', 'jobs', 'workers', 'contact'].map((k) => (
            <Link key={k} className="text-sm font-medium hover:text-brand-red" href={k === 'home' ? `/${locale}` : `/${locale}/${k}`}>
              {t.nav[k as keyof typeof t.nav]}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <LanguageSwitcher locale={locale} />
          <Link className="btn-secondary hidden md:inline-flex" href={`/${locale}/auth/login`}>{t.nav.login}</Link>
          <Link className="btn-primary" href={`/${locale}/auth/signup`}>{t.nav.signup}</Link>
        </div>
      </div>
    </header>
  );
}
