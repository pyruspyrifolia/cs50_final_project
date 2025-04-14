// app/api/locations/route.ts (for Next.js App Router)
import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma'; // Adjust based on your database setup

export async function GET() {
  try {
    const locations = await prisma.location.findMany();
    return NextResponse.json(locations);
  } catch (error) {
    console.error('Error fetching locations:', error);
    return NextResponse.json({ error: 'Failed to fetch locations' }, { status: 500 });
  }
}