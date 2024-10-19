import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/navbar/Navbar';
import Footer from '@/components/footer/Footer';

export const metadata: Metadata = {
  title: 'ByteCare',
  description:
    'Opravy počítačů, mobilních telefonů, notebooků a dalších zařízení',
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='cs'>
      <body>
        <Navbar />

        {children}

        <Footer />
      </body>
    </html>
  );
}
