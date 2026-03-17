'use client';

import { usePathname, useRouter } from 'next/navigation';
import { locales, type Locale } from '@/lib/i18n/config';

export function LanguageSwitcher({ locale }: { locale: Locale }) {
  const pathname = usePathname();
  const router = useRouter();

  const onChange = (nextLocale: Locale) => {
    const segments = pathname.split('/');
    segments[1] = nextLocale;
    document.cookie = `xamali-locale=${nextLocale}; path=/; max-age=31536000`;
    router.push(segments.join('/'));
  };

  return (
    <select
      aria-label="Language"
      className="rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm"
      value={locale}
      onChange={(e) => onChange(e.target.value as Locale)}
    >
      {locales.map((l) => (
        <option key={l} value={l}>
          {l.toUpperCase()}
        </option>
      ))}
    </select>
  );
}
