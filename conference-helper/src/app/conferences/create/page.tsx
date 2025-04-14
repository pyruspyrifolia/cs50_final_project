'use client'

import React from 'react';
import { ConferenceForm } from '../../../components/forms/ConferenceForm';

export default function AddConferencePage() {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Add New Conference</h1>
      <ConferenceForm />
    </div>
  );
}