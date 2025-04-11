// app/conferences/route.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// This would typically connect to your database
// Mock data for demonstration purposes
const conferences = [
  {
    id: 1,
    name: 'Web Development Summit 2025',
    description: 'Join the leading experts in web development to explore the latest trends, technologies, and best practices.',
    startDate: '2025-05-15',
    endDate: '2025-05-17',
    location: 'San Francisco, CA',
    venue: 'Moscone Center',
    category: 'Technology',
    price: 599,
    attendees: 1200,
    image: '/images/web-dev-summit.jpg',
    status: 'upcoming',
    featured: true,
    tags: ['Web Development', 'JavaScript', 'Frontend', 'Backend']
  },
  {
    id: 2,
    name: 'AI & Machine Learning Expo',
    description: 'Discover the future of artificial intelligence and machine learning with hands-on workshops and keynote presentations.',
    startDate: '2025-06-22',
    endDate: '2025-06-24',
    location: 'Austin, TX',
    venue: 'Austin Convention Center',
    category: 'Technology',
    price: 799,
    attendees: 850,
    image: '/images/ai-expo.jpg',
    status: 'upcoming',
    featured: true,
    tags: ['AI', 'Machine Learning', 'Data Science', 'Neural Networks']
  },
  {
    id: 3,
    name: 'Product Management Conference',
    description: 'Learn from industry leaders about product strategy, roadmapping, and creating customer-centric experiences.',
    startDate: '2025-07-10',
    endDate: '2025-07-12',
    location: 'New York, NY',
    venue: 'Javits Center',
    category: 'Business',
    price: 499,
    attendees: 650,
    image: '/images/product-conf.jpg',
    status: 'upcoming',
    featured: false,
    tags: ['Product Management', 'Strategy', 'UX', 'Agile']
  },
  {
    id: 4,
    name: 'UX/UI Design Forum',
    description: 'Explore the latest design trends and tools with industry experts.',
    startDate: '2025-08-05',
    endDate: '2025-08-07',
    location: 'Seattle, WA',
    venue: 'Seattle Convention Center',
    category: 'Design',
    price: 399,
    attendees: 520,
    image: '/images/design-forum.jpg',
    status: 'upcoming',
    featured: false,
    tags: ['UX', 'UI', 'Design Systems', 'User Research']
  }
];

// GET handler to retrieve all conferences or filter by query parameters
export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  
  // Get filter parameters
  const category = searchParams.get('category');
  const status = searchParams.get('status');
  const featured = searchParams.get('featured');
  const search = searchParams.get('search')?.toLowerCase();
  
  // Apply filters
  let filteredConferences = [...conferences];
  
  if (category) {
    filteredConferences = filteredConferences.filter(conf => conf.category === category);
  }
  
  if (status) {
    filteredConferences = filteredConferences.filter(conf => conf.status === status);
  }
  
  if (featured === 'true') {
    filteredConferences = filteredConferences.filter(conf => conf.featured);
  }
  
  if (search) {
    filteredConferences = filteredConferences.filter(conf => 
      conf.name.toLowerCase().includes(search) || 
      conf.description.toLowerCase().includes(search) ||
      conf.tags.some(tag => tag.toLowerCase().includes(search))
    );
  }
  
  return NextResponse.json({ conferences: filteredConferences });
}

// POST handler to create a new conference
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Validate required fields
    const requiredFields = ['name', 'startDate', 'endDate', 'location', 'category'];
    for (const field of requiredFields) {
      if (!body[field]) {
        return NextResponse.json(
          { error: `Missing required field: ${field}` },
          { status: 400 }
        );
      }
    }
    
    // Create new conference (in a real app, you would save to a database)
    const newConference = {
      id: conferences.length + 1,
      ...body,
      attendees: 0,
      image: body.image || '/images/default-conference.jpg',
      status: 'upcoming',
      featured: body.featured || false,
      tags: body.tags || []
    };
    
    // In a real application, you would add to database here
    conferences.push(newConference as any);
    
    return NextResponse.json({ conference: newConference }, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: 'Invalid request body' },
      { status: 400 }
    );
  }
}