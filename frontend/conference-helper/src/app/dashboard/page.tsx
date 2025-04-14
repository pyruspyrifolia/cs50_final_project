'use client'
// pages/dashboard.tsx
import React, { useState } from 'react';
import Link from 'next/link'
import Head from 'next/head';
import { LineChart, BarChart, PieChart, Line, Bar, Pie, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Cell } from 'recharts';
import { Calendar, Users, Briefcase, DollarSign, ChevronDown, ChevronUp, Bell, Search } from 'lucide-react';

// Mock data for the dashboard
const attendanceData = [
  { month: 'Jan', attendees: 1200 },
  { month: 'Feb', attendees: 1900 },
  { month: 'Mar', attendees: 2400 },
  { month: 'Apr', attendees: 1800 },
  { month: 'May', attendees: 2800 },
  { month: 'Jun', attendees: 3200 },
];

const revenueData = [
  { month: 'Jan', revenue: 25000 },
  { month: 'Feb', revenue: 35000 },
  { month: 'Mar', revenue: 45000 },
  { month: 'Apr', revenue: 40000 },
  { month: 'May', revenue: 60000 },
  { month: 'Jun', revenue: 75000 },
];

const categoryData = [
  { name: 'Technology', value: 400 },
  { name: 'Business', value: 300 },
  { name: 'Marketing', value: 200 },
  { name: 'Design', value: 150 },
  { name: 'Other', value: 100 },
];

const upcomingConferences = [
  { id: 1, name: 'Web Development Summit', date: '2025-05-15', location: 'San Francisco, CA', registrations: 350 },
  { id: 2, name: 'AI & Machine Learning Expo', date: '2025-06-22', location: 'Austin, TX', registrations: 420 },
  { id: 3, name: 'Product Management Conference', date: '2025-07-10', location: 'New York, NY', registrations: 280 },
  { id: 4, name: 'UX/UI Design Forum', date: '2025-08-05', location: 'Seattle, WA', registrations: 190 },
];

const topSpeakers = [
  { id: 1, name: 'Sarah Johnson', specialization: 'AI Ethics', rating: 4.9, events: 8 },
  { id: 2, name: 'Michael Chen', specialization: 'Blockchain', rating: 4.8, events: 12 },
  { id: 3, name: 'Aisha Patel', specialization: 'Product Strategy', rating: 4.7, events: 6 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884D8'];

const Dashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'overview' | 'conferences' | 'speakers'>('overview');
  
  return (
    <div className="min-h-screen bg-gray-100">
      <Head>
        <title>Dashboard</title>
        <meta name="description" content="Conference management dashboard" />
      </Head>

      {/* Sidebar */}
      <div className="flex">
        <div className="w-64 min-h-screen bg-indigo-800 text-white p-4 hidden md:block">
          <div className="text-2xl font-bold mb-8 mt-2">Conference-Tracker</div>
          <nav>
            <ul className="space-y-2">
              <li>
                <button 
                  className={`w-full text-left py-2 px-4 rounded-lg flex items-center ${activeTab === 'overview' ? 'bg-indigo-700' : 'hover:bg-indigo-700'}`}
                  onClick={() => setActiveTab('overview')}
                >
                  <Calendar className="mr-2 h-5 w-5" />
                  <span>Overview</span>
                </button>
              </li>
              <li>
                <button 
                  className={`w-full text-left py-2 px-4 rounded-lg flex items-center ${activeTab === 'conferences' ? 'bg-indigo-700' : 'hover:bg-indigo-700'}`}
                  onClick={() => setActiveTab('conferences')}
                >
                  <Briefcase className="mr-2 h-5 w-5" />
                  <span>Conferences</span>
                </button>
              </li>
              <li>
                <button 
                  className={`w-full text-left py-2 px-4 rounded-lg flex items-center ${activeTab === 'speakers' ? 'bg-indigo-700' : 'hover:bg-indigo-700'}`}
                  onClick={() => setActiveTab('speakers')}
                >
                  <Users className="mr-2 h-5 w-5" />
                  <span>Speakers</span>
                </button>
              </li>
            </ul>
          </nav>
        </div>

        {/* Main Content */}
        <div className="flex-1">
          {/* Top Navigation */}
          <header className="bg-white shadow-sm">
            <div className="flex items-center justify-between p-4">
              <h1 className="text-2xl font-semibold">Dashboard</h1>
              <div className="flex items-center space-x-4">
              </div>
            </div>
          </header>

          {/* Dashboard Content */}
          <main className="p-6">
            {activeTab === 'overview' && (
              <>
                {/* Stats Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
                  <div className="bg-white rounded-xl shadow-md p-6 flex items-center">
                    <div className="p-3 rounded-full bg-blue-100 text-blue-600 mr-4">
                      <Users className="h-6 w-6" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Total Attendees</p>
                      <p className="text-xl font-semibold">13,294</p>
                      <p className="text-sm text-green-500">+12% from last year</p>
                    </div>
                  </div>
                  <div className="bg-white rounded-xl shadow-md p-6 flex items-center">
                    <div className="p-3 rounded-full bg-green-100 text-green-600 mr-4">
                      <Briefcase className="h-6 w-6" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Total Conferences</p>
                      <p className="text-xl font-semibold">42</p>
                      <p className="text-sm text-green-500">+8% from last year</p>
                    </div>
                  </div>
                  <div className="bg-white rounded-xl shadow-md p-6 flex items-center">
                    <div className="p-3 rounded-full bg-purple-100 text-purple-600 mr-4">
                      <Users className="h-6 w-6" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Total Speakers</p>
                      <p className="text-xl font-semibold">247</p>
                      <p className="text-sm text-green-500">+15% from last year</p>
                    </div>
                  </div>
                  <div className="bg-white rounded-xl shadow-md p-6 flex items-center">
                    <div className="p-3 rounded-full bg-yellow-100 text-yellow-600 mr-4">
                      <DollarSign className="h-6 w-6" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Total Revenue</p>
                      <p className="text-xl font-semibold">$280,000</p>
                      <p className="text-sm text-green-500">+23% from last year</p>
                    </div>
                  </div>
                </div>

                {/* Charts */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
                  <div className="bg-white rounded-xl shadow-md p-6">
                    <h2 className="text-lg font-semibold mb-4">Attendance Trends</h2>
                    <div className="h-64">
                      <ResponsiveContainer width="100%" height="100%">
                        <LineChart data={attendanceData}>
                          <CartesianGrid strokeDasharray="3 3" />
                          <XAxis dataKey="month" />
                          <YAxis />
                          <Tooltip />
                          <Legend />
                          <Line type="monotone" dataKey="attendees" stroke="#8884d8" activeDot={{ r: 8 }} />
                        </LineChart>
                      </ResponsiveContainer>
                    </div>
                  </div>
                  <div className="bg-white rounded-xl shadow-md p-6">
                    <h2 className="text-lg font-semibold mb-4">Revenue Breakdown</h2>
                    <div className="h-64">
                      <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={revenueData}>
                          <CartesianGrid strokeDasharray="3 3" />
                          <XAxis dataKey="month" />
                          <YAxis />
                          <Tooltip />
                          <Legend />
                          <Bar dataKey="revenue" fill="#82ca9d" />
                        </BarChart>
                      </ResponsiveContainer>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  {/* Conference Categories */}
                  <div className="bg-white rounded-xl shadow-md p-6">
                    <h2 className="text-lg font-semibold mb-4">Conference Categories</h2>
                    <div className="h-64">
                      <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                          <Pie
                            data={categoryData}
                            cx="50%"
                            cy="50%"
                            labelLine={false}
                            outerRadius={80}
                            fill="#8884d8"
                            dataKey="value"
                            label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                          >
                            {categoryData.map((entry, index) => (
                              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                          </Pie>
                          <Tooltip />
                        </PieChart>
                      </ResponsiveContainer>
                    </div>
                  </div>

                  {/* Upcoming Conferences */}
                  <div className="bg-white rounded-xl shadow-md p-6 col-span-1 lg:col-span-2">
                    <div className="flex justify-between items-center mb-4">
                      <h2 className="text-lg font-semibold">Upcoming Conferences</h2>
                      <Link href={'/conferences'}>
                      <button className="text-sm text-indigo-600 hover:text-indigo-800">View All</button>
                      </Link>
                    </div>
                    <div className="overflow-x-auto">
                      <table className="w-full">
                        <thead>
                          <tr className="text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            <th className="px-4 py-3">Name</th>
                            <th className="px-4 py-3">Date</th>
                            <th className="px-4 py-3">Location</th>
                            <th className="px-4 py-3">Registrations</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                          {upcomingConferences.map((conference) => (
                            <tr key={conference.id}>
                              <td className="px-4 py-3 whitespace-nowrap">
                                <div className="font-medium text-gray-900">{conference.name}</div>
                              </td>
                              <td className="px-4 py-3 whitespace-nowrap text-gray-500">
                                {new Date(conference.date).toLocaleDateString()}
                              </td>
                              <td className="px-4 py-3 whitespace-nowrap text-gray-500">
                                {conference.location}
                              </td>
                              <td className="px-4 py-3 whitespace-nowrap">
                                <div className="text-sm text-gray-900">{conference.registrations}</div>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </>
            )}

            {activeTab === 'conferences' && (
              <div className="bg-white rounded-xl shadow-md p-6">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-xl font-semibold">All Conferences</h2>
                  <Link href={'/conferences/create'}>
                  <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">
                    Add Conference
                  </button>
                  </Link>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {upcomingConferences.concat(upcomingConferences).map((conference) => (
                    <div key={`extended-${conference.id}`} className="border rounded-xl overflow-hidden">
                      <div className="h-40 bg-gradient-to-r from-indigo-500 to-purple-500 flex items-center justify-center">
                        <h3 className="text-xl font-bold text-white">{conference.name}</h3>
                      </div>
                      <div className="p-4">
                        <div className="flex items-center text-gray-500 mb-2">
                          <Calendar className="w-4 h-4 mr-2" />
                          <span>{new Date(conference.date).toLocaleDateString()}</span>
                        </div>
                        <div className="flex items-center text-gray-500 mb-4">
                          <Users className="w-4 h-4 mr-2" />
                          <span>{conference.registrations} Registrations</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm bg-green-100 text-green-800 px-2 py-1 rounded">Active</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'speakers' && (
              <div className="bg-white rounded-xl shadow-md p-6">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-xl font-semibold">Featured Speakers</h2>      
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {topSpeakers.concat(topSpeakers).map((speaker, idx) => (
                    <div key={`extended-${speaker.id}-${idx}`} className="border rounded-xl overflow-hidden flex">
                      <div className="w-24 bg-gray-200 flex items-center justify-center">
                        <div className="h-16 w-16 rounded-full bg-indigo-600 flex items-center justify-center text-white font-bold text-xl">
                          {speaker.name.split(' ').map(n => n[0]).join('')}
                        </div>
                      </div>
                      <div className="flex-1 p-4">
                        <h3 className="font-semibold text-lg">{speaker.name}</h3>
                        <p className="text-sm text-gray-500 mb-2">{speaker.specialization}</p>
                        <div className="flex justify-between items-center">
                          <div className="flex items-center">
                            <span className="text-yellow-500">★</span>
                            <span className="ml-1 text-sm">{speaker.rating}/5.0</span>
                          </div>
                          <span className="text-sm text-gray-500">{speaker.events} events</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;