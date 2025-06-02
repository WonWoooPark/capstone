'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Accommodation } from '../types';

interface AccommodationCardProps {
  accommodation: Accommodation;
}

const AccommodationCard: React.FC<AccommodationCardProps> = ({ accommodation }) => {
  return (
    <Link href={`/accommodation/${accommodation.id}`}>
      <div className="flex flex-col space-y-2 cursor-pointer">
        <div className="relative h-64 w-full">
          <Image
            src={accommodation.imageUrl}
            alt={accommodation.title}
            fill
            className="rounded-xl object-cover"
          />
          {accommodation.isSuperhost && (
            <div className="absolute top-2 left-2 bg-white px-2 py-1 rounded-full text-xs font-semibold">
              슈퍼호스트
            </div>
          )}
        </div>
        <div className="flex justify-between">
          <h3 className="text-lg font-semibold">{accommodation.title}</h3>
          <div className="flex items-center">
            <span className="text-sm">★ {accommodation.rating}</span>
            <span className="ml-2 text-sm text-blue-500">AI {accommodation.aiScore}</span>
          </div>
        </div>
        <p className="text-gray-500">{accommodation.location}</p>
        <p className="font-semibold">₩{accommodation.price.toLocaleString()} / 박</p>
      </div>
    </Link>
  );
};

export default AccommodationCard; 