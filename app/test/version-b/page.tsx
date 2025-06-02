'use client';

import React from 'react'
import { sampleAccommodations } from '../../data/sampleData';
import AccommodationCard from '../../components/AccommodationCard';

export default function VersionB() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">숙소 목록 (버전 B)</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {sampleAccommodations.map((accommodation) => (
          <AccommodationCard
            key={accommodation.id}
            accommodation={accommodation}
            showAiScore={true}
          />
        ))}
      </div>
    </div>
  );
} 