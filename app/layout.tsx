import type { Metadata } from 'next';
import './globals.css';
import Navbar from '../components/Navbar';
import { Roboto_Mono, Poppins } from 'next/font/google';

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
    <html lang="en">
      <body className={`bg-navy ${robotoMono.variable}`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
