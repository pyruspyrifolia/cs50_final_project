'use client';  
  
import React, { useState, useEffect } from 'react';  
import { useForm } from 'react-hook-form';  
import { zodResolver } from '@hookform/resolvers/zod';  
import { z } from 'zod';  
import { Button } from '@/components/ui/Button';  
import { Conference } from '@/types';  
import { useRouter } from 'next/navigation';  
import toast from 'react-hot-toast';  
  
const conferenceSchema = z.object({  
  name: z.string().min(3, { message: 'Name must be at least 3 characters' }),  
  description: z.string().optional(),  
  startDate: z.string(),  
  endDate: z.string(),  
  maxPresentations: z.number().min(1),  
  maxAttendees: z.number().min(1),  
  locationId: z.string().optional(),  
  category: z.string().optional(),  
  price: z.number().min(0, { message: 'Price must be a non-negative number' }),  
});    
  
type ConferenceFormData = z.infer<typeof conferenceSchema>;  
  
interface ConferenceFormProps {  
  conference?: Conference;  
  isEditing?: boolean;  
}  
  
export const ConferenceForm: React.FC<ConferenceFormProps> = ({  
  conference,  
  isEditing = false,  
}) => {  
  const router = useRouter();  
  const [locations, setLocations] = useState<any[]>([]);  
  const [loading, setLoading] = useState(false);  
  const [locationsLoaded, setLocationsLoaded] = useState(false);  
  
  const {  
    register,  
    handleSubmit,  
    formState: { errors },  
  } = useForm<ConferenceFormData>({  
    resolver: zodResolver(conferenceSchema),  
    defaultValues: isEditing && conference  
      ? {  
          ...conference,  
          startDate: new Date(conference.starts).toISOString().slice(0, 16),  
          endDate: new Date(conference.ends).toISOString().slice(0, 16),
          price: conference.price,  
        }  
      : {  
          maxPresentations: 1,  
          maxAttendees: 1,  
        },  
  });  
  
  useEffect(() => {  
    const fetchLocations = async () => {  
      try {  
        const response = await fetch('/api/locations');  
        if (!response.ok) {  
          throw new Error('Failed to fetch locations');  
        }  
        const data = await response.json();  
        setLocations(data);  
      } catch (error) {  
        console.error('Error fetching locations:', error);  
        toast.error('Failed to load locations');  
      } finally {  
        setLocationsLoaded(true);  
      }  
    };  
  
    fetchLocations();  
  }, []);  
  
  const onSubmit = async (data: ConferenceFormData) => {  
    setLoading(true);  
    try {  
      if (!data.locationId || data.locationId.trim() === '') {  
        data.locationId = null;  
      }  
  
      const response = await fetch(  
        isEditing  
          ? `/api/auth/conferences/${conference?.id}`  
          : '/api/auth/conferences',  
        {  
          method: isEditing ? 'PUT' : 'POST',  
          headers: {  
            'Content-Type': 'application/json',  
          },  
          body: JSON.stringify({  
            ...data,  
            startDate: new Date(data.startDate).toISOString(),  
            endDate: new Date(data.endDate).toISOString(),  
            maxPresentations: Number(data.maxPresentations),  
            maxAttendees: Number(data.maxAttendees),  
            price: Number(data.price),  
          }),   
        }  
      );  
  
      if (!response.ok) {  
        const errorData = await response.json();  
        throw new Error(errorData.message ||'Failed to save conference');  
      }  
  
      toast.success(isEditing ? 'Conference updated!' : 'Conference created!');  
      router.push('/conferences');  
    } catch (error: any) {  
      console.error('Error saving conference:', error);  
      toast.error(error.message || 'Failed to save conference');  
    } finally {  
      setLoading(false);  
    }  
  };  
  
  return (  
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">  
      <div>  
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">  
          Conference Name  
        </label>  
        <input  
          type="text"  
          id="name"  
          {...register('name')}  
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"  
        />  
        {errors.name && (  
          <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>  
        )}  
      </div>  
  
      <div>  
        <label htmlFor="description" className="block text-sm font-medium text-gray-700">  
          Description  
        </label>  
        <textarea  
          id="description"  
          {...register('description')}  
          rows={4}  
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"  
        />  
        {errors.description && (  
          <p className="mt-1 text-sm text-red-600">{errors.description.message}</p>  
        )}  
      </div>

      <div>  
        <label htmlFor="price" className="block text-sm font-medium text-gray-700">  
          Price  
        </label>  
        <input  
          type="number"  
          id="price"  
          {...register('price', { valueAsNumber: true })}  
          min={0}  
          step={0.01}  
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"  
        />  
        {errors.price && (  
          <p className="mt-1 text-sm text-red-600">{errors.price.message}</p>  
        )}  
      </div>  
  
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">  
        <div>  
          <label htmlFor="startDate" className="block text-sm font-medium text-gray-700">  
            Start Date & Time  
          </label>  
          <input  
            type="datetime-local"  
            id="startDate"  
            {...register('startDate')}  
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"  
          />  
          {errors.startDate && (  
            <p className="mt-1 text-sm text-red-600">{errors.startDate.message}</p>  
          )}  
        </div>  
        <div>  
          <label htmlFor="endDate" className="block text-sm font-medium text-gray-700">  
            End Date & Time  
          </label>  
          <input  
            type="datetime-local"  
            id="endDate"  
            {...register('endDate')}  
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"  
          />  
          {errors.endDate && (  
            <p className="mt-1 text-sm text-red-600">{errors.endDate.message}</p>  
          )}  
        </div>  
      </div>  
  
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">  
        <div>  
          <label htmlFor="maxPresentations" className="block text-sm font-medium text-gray-700">  
            Max Presentations  
          </label>  
          <input  
            type="number"  
            id="maxPresentations"  
            {...register('maxPresentations', { valueAsNumber: true })}  
            min={1}  
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"  
          />  
          {errors.maxPresentations && (  
            <p className="mt-1 text-sm text-red-600">{errors.maxPresentations.message}</p>  
          )}  
        </div>  
        <div>  
          <label htmlFor="maxAttendees" className="block text-sm font-medium text-gray-700">  
            Max Attendees  
          </label>  
          <input  
            type="number"  
            id="maxAttendees"  
            {...register('maxAttendees', { valueAsNumber: true })}  
            min={1}  
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"  
          />  
          {errors.maxAttendees && (  
            <p className="mt-1 text-sm text-red-600">{errors.maxAttendees.message}</p>  
          )}  
        </div>  
      </div>  
  
      {locationsLoaded && locations.length > 0 && (  
        <div>  
          <label htmlFor="locationId" className="block text-sm font-medium text-gray-700">  
            Location  
          </label>  
          <select  
            id="locationId"  
            {...register('locationId')}  
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"  
          >  
            <option value="">Select a location (optional)</option>  
            {locations.map((location) => (  
              <option key={location.id} value={location.id}>  
                {location.name}  
              </option>  
            ))}  
          </select>  
        </div>  
      )}  
  
      {locationsLoaded && locations.length === 0 && (  
        <div className="bg-yellow-50 p-4 rounded-md">  
          <p className="text-yellow-700">  
             
          </p>  
        </div>  
      )}  
  
      <div className="flex justify-end space-x-4">  
        <Button  
          type="button"  
          variant="outline"  
          onClick={() => router.push('/conferences')}  
          disabled={loading}  
        >  
          Cancel  
        </Button>  
        <Button type="submit" variant="primary" disabled={loading}>  
          {loading ? 'Saving...' : isEditing ? 'Update Conference' : 'Create Conference'}  
        </Button>  
      </div>  
    </form>  
  );  
};  