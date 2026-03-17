import Link from 'next/link';
import type { Locale } from '@/lib/i18n/config';

export function Footer({ locale }: { locale: Locale }) {
  return (
    <footer className="mt-20 border-t border-gray-100 bg-gray-50">
      <div className="container-shell grid gap-8 py-12 md:grid-cols-4">
        <div>
          <h3 className="text-xl font-bold text-brand-red">XAMALI</h3>
          <p className="mt-3 text-sm text-gray-600">Trusted construction hiring in Djibouti.</p>
        </div>
        <div className="space-y-2 text-sm">
          <p className="font-semibold">Platform</p>
          <Link href={`/${locale}/jobs`} className="block text-gray-600">Jobs</Link>
          <Link href={`/${locale}/workers`} className="block text-gray-600">Workers</Link>
          <Link href={`/${locale}/verification`} className="block text-gray-600">Trust & Safety</Link>
        </div>
        <div className="space-y-2 text-sm">
          <p className="font-semibold">Legal</p>
          <Link href={`/${locale}/privacy`} className="block text-gray-600">Privacy Policy</Link>
          <Link href={`/${locale}/terms`} className="block text-gray-600">Terms of Service</Link>
        </div>
        <div className="space-y-2 text-sm">
          <p className="font-semibold">Support</p>
          <Link href={`/${locale}/help`} className="block text-gray-600">Help Center</Link>
          <Link href={`/${locale}/faq`} className="block text-gray-600">FAQ</Link>
          <p className="text-gray-600">+253 21 00 00 00</p>
        </div>
      </div>
    </footer>
  );
}
