import type { Metadata } from 'next';
import './globals.css';
import Navbar from '../components/Navbar';
import { Roboto_Mono } from 'next/font/google';
import Footer from './Footer';

export const metadata: Metadata = {
  title: 'Mahsin Saifullah',
  description: "This is mahsin saifullah's digital resume",
};

const robotoMono = Roboto_Mono({
  variable: '--font-roboto-mono',
  subsets: ['latin'],
  weight: ['200', '400', '700'],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`bg-navy ${robotoMono.variable}`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
