import React from 'react';
import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';

import './globals.css';
import NavBar from '@/components/reusable/NavBar';
import Providers from './providers';
import Footer from '@/components/reusable/Footer';
import ContactMe from '@/components/reusable/ContactMe';

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
    <html lang='en'>
      <body className={`${poppins.className} bg-background-2 dark:bg-gray-800`}>
        <Providers>
          <NavBar />
          {children}
          <ContactMe />
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
