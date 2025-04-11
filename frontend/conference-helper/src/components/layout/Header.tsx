'use client'

import React from 'react';
import Link from 'next/link';
import { useSession, signOut } from 'next-auth/react';
import { Button } from '@/components/ui/Button';

export const Header: React.FC = () => {
  const { data: session } = useSession();

  return (
    <header className="bg-white shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <Link href="/" className="text-xl font-bold text-blue-600">
                Conference-Go
              </Link>
            </div>
            <nav className="ml-6 flex space-x-8">
              <Link href="/conferences" className="inline-flex items-center px-1 pt-1 text-gray-500 hover:text-gray-700">
                Conferences
              </Link>
              <Link href="/dashboard" className="inline-flex items-center px-1 pt-1 text-gray-500 hover:text-gray-700">
                Dashboard
              </Link>
            </nav>
          </div>
          <div className="flex items-center">
            {session ? (
              <div className="flex items-center space-x-4">
                <span className="text-sm text-gray-700">Hello, {session.user?.name || session.user?.email}</span>
                <Button onClick={() => signOut()} variant="outline" size="sm">
                  Sign Out
                </Button>
              </div>
            ) : (
              <div className="space-x-4">
                <Link href="/login">
                  <Button variant="outline" size="sm">
                    Sign In
                  </Button>
                </Link>
                <Link href="/register">
                  <Button variant="primary" size="sm">
                    Sign Up
                  </Button>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};