import { Hero } from '@/components/sections/hero';
import { HomeSections } from '@/components/sections/home-sections';
import { Locale } from '@/lib/i18n/config';

export default async function Home({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  return (
    <>
      <Hero locale={locale} />
      <HomeSections locale={locale} />
    </>
  );
}
