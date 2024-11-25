import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Mahsin Saifullah',
  description: "This is mahsin saifullah's digital resume",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
