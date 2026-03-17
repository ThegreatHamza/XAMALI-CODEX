import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'XAMALI | Construction Hiring Marketplace in Djibouti',
  description: 'XAMALI connects construction workers and employers across Djibouti through a trusted multilingual hiring platform.',
  openGraph: {
    title: 'XAMALI',
    description: 'Trusted construction hiring marketplace in Djibouti',
    type: 'website'
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
