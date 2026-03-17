import { Footer } from '@/components/layout/footer';
import { Header } from '@/components/layout/header';
import { isRtl, locales, type Locale } from '@/lib/i18n/config';
import { notFound } from 'next/navigation';

export default async function LocaleLayout({ children, params }: { children: React.ReactNode; params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  if (!locales.includes(locale)) notFound();

  return (
    <div dir={isRtl(locale) ? 'rtl' : 'ltr'} lang={locale} className="min-h-screen bg-white">
      <Header locale={locale} />
      <main>{children}</main>
      <Footer locale={locale} />
    </div>
  );
}
