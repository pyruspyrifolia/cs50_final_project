'use client'
import { useRouter } from 'next/router';  // Change to 'next/router' instead of 'next/navigation'
import React, { useEffect, useState } from 'react';  
  
interface Conference {  
  id: string;  
  name: string;  
  startDate: string;  
  endDate: string;  
  location: string;  
  attendees: number;  
  speakers: string[];  
  status: string;  
}  
  
const EditConference: React.FC = () => {  
  const router = useRouter();  
  const { id } = router.query;  // Access the 'id' from the query object
  
  const [conference, setConference] = useState<Conference | null>(null);  
  const [loading, setLoading] = useState<boolean>(true);  
  const [error, setError] = useState<string | null>(null);  
  
  useEffect(() => {
    // Check if 'id' is available before fetching
    if (!id) return;

    const fetchConference = async () => {  
      try {  
        const response = await fetch(`/api/auth/conferences/${id}`);  
        if (!response.ok) {  
          throw new Error('Failed to fetch conference details');  
        }  
        const data = await response.json();  
        setConference(data);  
      } catch (error: any) {  
        setError(error.message);  
      } finally {  
        setLoading(false);  
      }  
    };

    fetchConference();  
  }, [id]);  // Fetch only when 'id' is available
  
  if (!id || loading) return <div>Loading...</div>;  
  if (error) return <div>Error: {error}</div>;  

  return (  
    <div className="min-h-screen bg-gray-100 p-6">  
      <div className="bg-white rounded-lg shadow-md p-6 max-w-3xl mx-auto">  
        <h2 className="text-2xl font-semibold mb-6">Update Conference</h2>  
        <form onSubmit={handleFormSubmit}>  
          {/* Form fields */}
        </form>  
      </div>  
    </div>  
  );  
};  
  
export default EditConference;
