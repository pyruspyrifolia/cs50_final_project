import Link from 'next/link';
import { Button } from '@/components/ui/Button';

export default function Home() {
  return (
    <div className="relative isolate px-6 pt-14 lg:px-8">
      <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Manage Your Conferences with Ease
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Conference-Go helps you organize and manage conferences, presentations, locations, and attendees all in one place.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link href="/conferences">
              <Button variant="primary" size="lg">
                View Conferences
              </Button>
            </Link>
            <Link href="/register" className="text-sm font-semibold leading-6 text-gray-900">
              Register <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}