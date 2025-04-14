import React from 'react';
import { Inter } from 'next/font/google';
import type { Metadata } from 'next';
import './globals.css';
import { Header } from '@/components/layout/Header';
import { Toaster } from 'react-hot-toast';
import AuthProvider from '@/lib/AuthProvider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Conference-Tracker',
  description: 'Conference Management Application',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <div className="min-h-screen bg-gray-50">
            <Header />
            <main className="py-10">
              <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                {children}
              </div>
            </main>
            <Toaster position="top-right" />
          </div>
        </AuthProvider>
      </body>
    </html>
  );
}