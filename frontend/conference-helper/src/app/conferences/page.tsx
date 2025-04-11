// app/conferences/page.tsx
'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Search, Filter, Calendar, MapPin, Users, Tag, ChevronDown } from 'lucide-react';

interface Conference {
  id: number;
  name: string;
  description: string;
  startDate: string;
  endDate: string;
  location: string;
  venue: string;
  category: string;
  price: number;
  attendees: number;
  image: string;
  status: 'upcoming' | 'ongoing' | 'past';
  featured: boolean;
  tags: string[];
}

export default function ConferencesPage() {
  const [conferences, setConferences] = useState<Conference[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  // Filter states
  const [searchQuery, setSearchQuery] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('');
  const [statusFilter, setStatusFilter] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  
  // Fetch conferences on component mount and when filters change
  useEffect(() => {
    async function fetchConferences() {
      setLoading(true);
      try {
        // Build query parameters
        const params = new URLSearchParams();
        if (searchQuery) params.append('search', searchQuery);
        if (categoryFilter) params.append('category', categoryFilter);
        if (statusFilter) params.append('status', statusFilter);
        
        const response = await fetch(`/api/conferences?${params.toString()}`);
        
        if (!response.ok) {
          throw new Error('Failed to fetch conferences');
        }
        
        const data = await response.json();
        setConferences(data.conferences);
        setError(null);
      } catch (err) {
        setError('Error loading conferences. Please try again later.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    }
    
    fetchConferences();
  }, [searchQuery, categoryFilter, statusFilter]);
  
  // Format date range
  const formatDateRange = (startDate: string, endDate: string) => {
    const start = new Date(startDate);
    const end = new Date(endDate);
    
    // If same month and year
    if (start.getMonth() === end.getMonth() && start.getFullYear() === end.getFullYear()) {
      return `${start.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })} - ${end.toLocaleDateString('en-US', { day: 'numeric', year: 'numeric' })}`;
    }
    
    // If same year
    if (start.getFullYear() === end.getFullYear()) {
      return `${start.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })} - ${end.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}`;
    }
    
    // Different years
    return `${start.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })} - ${end.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}`;
  };
  
  // Get status badge class
  const getStatusBadgeClass = (status: string) => {
    switch (status) {
      case 'upcoming':
        return 'bg-blue-100 text-blue-800';
      case 'ongoing':
        return 'bg-green-100 text-green-800';
      case 'past':
        return 'bg-gray-100 text-gray-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };
  
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">Conferences</h1>
        </div>
      </header>
      
      <main className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
        {/* Search and filters */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="relative w-full md:w-96">
              <input
                type="text"
                placeholder="Search conferences..."
                className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
            
            <div className="flex items-center gap-2">
              <button 
                className="flex items-center gap-2 px-4 py-2 border rounded-lg bg-white hover:bg-gray-50"
                onClick={() => setShowFilters(!showFilters)}
              >
                <Filter className="h-5 w-5" />
                Filters
                <ChevronDown className={`h-4 w-4 transition-transform ${showFilters ? 'rotate-180' : ''}`} />
              </button>
              <Link href='/conferences/create'
              >
              <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">
                Add Conference
              </button>
              </Link>
            </div>
          </div>
          
          {/* Filter options */}
          {showFilters && (
            <div className="mt-4 p-4 bg-white rounded-lg shadow">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
                  <select
                    className="w-full p-2 border rounded-md"
                    value={categoryFilter}
                    onChange={(e) => setCategoryFilter(e.target.value)}
                  >
                    <option value="">All Categories</option>
                    <option value="Technology">Technology</option>
                    <option value="Business">Business</option>
                    <option value="Design">Design</option>
                    <option value="Marketing">Marketing</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
                  <select
                    className="w-full p-2 border rounded-md"
                    value={statusFilter}
                    onChange={(e) => setStatusFilter(e.target.value)}
                  >
                    <option value="">All Status</option>
                    <option value="upcoming">Upcoming</option>
                    <option value="ongoing">Ongoing</option>
                    <option value="past">Past</option>
                  </select>
                </div>
                
                <div className="flex items-end">
                  <button 
                    className="px-4 py-2 text-gray-600 border rounded-lg bg-gray-50 hover:bg-gray-100"
                    onClick={() => {
                      setSearchQuery('');
                      setCategoryFilter('');
                      setStatusFilter('');
                    }}
                  >
                    Clear Filters
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
        
        {/* Conference list */}
        {loading ? (
          <div className="text-center py-12">
            <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-indigo-600 border-r-transparent"></div>
            <p className="mt-4 text-gray-600">Loading conferences...</p>
          </div>
        ) : error ? (
          <div className="text-center py-12">
            <p className="text-red-600">{error}</p>
          </div>
        ) : conferences.length === 0 ? (
          <div className="text-center py-12 bg-white rounded-xl shadow">
            <p className="text-gray-600">No conferences found. Try adjusting your filters.</p>
          </div>
        ) : (
          <div className="space-y-6">
            {conferences.map((conference) => (
              <div key={conference.id} className="bg-white rounded-xl shadow overflow-hidden">
                <div className="md:flex">
                  <div className="md:flex-shrink-0 h-48 md:h-auto md:w-48 bg-gray-200 flex items-center justify-center">
                    {/* Replace with actual image in production */}
                    <div className="text-3xl font-bold text-gray-400">{conference.name.substring(0, 2)}</div>
                  </div>
                  <div className="p-6 flex-1">
                    <div className="flex items-center justify-between">
                      <div>
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusBadgeClass(conference.status)}`}>
                          {conference.status.charAt(0).toUpperCase() + conference.status.slice(1)}
                        </span>
                        {conference.featured && (
                          <span className="ml-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                            Featured
                          </span>
                        )}
                      </div>
                      <p className="text-lg font-semibold text-green-600">${conference.price}</p>
                    </div>
                    
                    <h2 className="mt-2 text-xl font-semibold text-gray-900">{conference.name}</h2>
                    <p className="mt-1 text-gray-600">{conference.description}</p>
                    
                    <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-y-2 gap-x-4">
                      <div className="flex items-center text-sm text-gray-500">
                        <Calendar className="mr-1.5 h-4 w-4 text-gray-400" />
                        {formatDateRange(conference.startDate, conference.endDate)}
                      </div>
                      <div className="flex items-center text-sm text-gray-500">
                        <MapPin className="mr-1.5 h-4 w-4 text-gray-400" />
                        {conference.location}
                      </div>
                      <div className="flex items-center text-sm text-gray-500">
                        <Users className="mr-1.5 h-4 w-4 text-gray-400" />
                        {conference.attendees} Attendees
                      </div>
                      <div className="flex items-center text-sm text-gray-500">
                        <Tag className="mr-1.5 h-4 w-4 text-gray-400" />
                        {conference.category}
                      </div>
                    </div>
                    
                    <div className="mt-4">
                      <div className="flex flex-wrap gap-2">
                        {conference.tags.map((tag, index) => (
                          <span key={index} className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="mt-6 flex items-center justify-between">
                      <Link href={`/conferences/${conference.id}`} className="text-indigo-600 hover:text-indigo-800 font-medium">
                        View Details
                      </Link>
                      <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">
                        Register Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}