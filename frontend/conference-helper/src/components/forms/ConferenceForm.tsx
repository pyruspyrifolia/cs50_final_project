'use client';

import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/Button';
import { Conference, Location } from '@/types';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';

const conferenceSchema = z.object({
  name: z.string().min(3, { message: 'Name must be at least 3 characters' }),
  description: z.string().optional(),
  starts: z.string(),
  ends: z.string(),
  maxPresentations: z.number().min(1),
  maxAttendees: z.number().min(1),
  locationId: z.string(),
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
  const [locations, setLocations] = useState<Location[]>([]);
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ConferenceFormData>({
    resolver: zodResolver(conferenceSchema),
    defaultValues: isEditing && conference
      ? {
          ...conference,
          starts: new Date(conference.starts).toISOString().slice(0, 16),
          ends: new Date(conference.ends).toISOString().slice(0, 16),
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
        const data = await response.json();
        setLocations(data);
      } catch (error) {
        console.error('Error fetching locations:', error);
        toast.error('Failed to load locations');
      }
    };

    fetchLocations();
  }, []);

  const onSubmit = async (data: ConferenceFormData) => {
    setLoading(true);
    try {
      const response = await fetch(
        isEditing ? `/api/conferences/${conference?.id}` : '/api/conferences',
        {
          method: isEditing ? 'PUT' : 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            ...data,
            starts: new Date(data.starts),
            ends: new Date(data.ends),
            maxPresentations: Number(data.maxPresentations),
            maxAttendees: Number(data.maxAttendees),
          }),
        }
      );

      if (!response.ok) {
        throw new Error('Failed to save conference');
      }

      toast.success(isEditing ? 'Conference updated!' : 'Conference created!');
      router.push('/conferences');
    } catch (error) {
      console.error('Error saving conference:', error);
      toast.error('Failed to save conference');
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

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="starts" className="block text-sm font-medium text-gray-700">
            Start Date & Time
          </label>
          <input
            type="datetime-local"
            id="starts"
            {...register('starts')}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
          {errors.starts && (
            <p className="mt-1 text-sm text-red-600">{errors.starts.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="ends" className="block text-sm font-medium text-gray-700">
            End Date & Time
          </label>
          <input
            type="datetime-local"
            id="ends"
            {...register('ends')}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
          {errors.ends && (
            <p className="mt-1 text-sm text-red-600">{errors.ends.message}</p>
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
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue"/>
        </div>
        </form>)}
