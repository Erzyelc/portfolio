import React from 'react';
import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';

import './globals.css';
import NavBar from '@/components/reusable/NavBar';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Ryan Carpenter',
  description: 'Portfolio Website',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body className={`${poppins.className} bg-background-2`}>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
