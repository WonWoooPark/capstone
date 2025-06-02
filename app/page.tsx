'use client';

import React from 'react'
import Header from './components/Header'
import AccommodationCard from './components/AccommodationCard'

const demoAccommodations = [
  {
    id: '1',
    title: '서울 시청 근처 아파트',
    location: '서울시 중구',
    price: 120000,
    rating: 4.7,
    reviewCount: 128,
    imageUrl: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267',
    aiScore: 4.3,
    isSuperhost: true,
    amenities: ['무선인터넷', '주방', '세탁기', '에어컨'],
    description: '서울 시청에서 도보 5분 거리의 아파트입니다.',
    categoryRatings: {
      cleanliness: { rating: 4.5, aiRating: 4.2 },
      accuracy: { rating: 4.3, aiRating: 4.1 },
      checkin: { rating: 4.3, aiRating: 4.0 },
      communication: { rating: 4.1, aiRating: 3.9 },
      location: { rating: 4.4, aiRating: 4.1 },
      value: { rating: 4.0, aiRating: 3.7 }
    }
  },
  {
    id: '2',
    title: '강남 스타일 원룸',
    location: '서울시 강남구',
    price: 150000,
    rating: 4.83,
    reviewCount: 89,
    imageUrl: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688',
    aiScore: 4.15,
    isSuperhost: false,
    amenities: ['무선인터넷', '주방'],
    description: '강남역 3번 출구에서 도보 3분 거리의 원룸입니다.',
    categoryRatings: {
      cleanliness: { rating: 4.5, aiRating: 4.2 },
      accuracy: { rating: 4.3, aiRating: 4.1 },
      checkin: { rating: 4.3, aiRating: 4.0 },
      communication: { rating: 4.1, aiRating: 3.9 },
      location: { rating: 4.4, aiRating: 4.1 },
      value: { rating: 4.0, aiRating: 3.7 }
    }
  },
  {
    id: '3',
    title: '홍대 근처 로프트',
    location: '서울시 마포구',
    price: 100000,
    rating: 4.6,
    reviewCount: 156,
    imageUrl: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750',
    aiScore: 3.7,
    isSuperhost: true,
    amenities: ['무선인터넷', '주방', '세탁기', '에어컨', '옥상'],
    description: '홍대입구역에서 도보 5분 거리의 로프트입니다.',
    categoryRatings: {
      cleanliness: { rating: 4.5, aiRating: 4.2 },
      accuracy: { rating: 4.3, aiRating: 4.1 },
      checkin: { rating: 4.3, aiRating: 4.0 },
      communication: { rating: 4.1, aiRating: 3.9 },
      location: { rating: 4.4, aiRating: 4.1 },
      value: { rating: 4.0, aiRating: 3.7 }
    }
  },
  {
    id: '4',
    title: '이태원 전망 좋은 펜션',
    location: '서울시 용산구',
    price: 200000,
    rating: 4.2,
    reviewCount: 203,
    imageUrl: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914',
    aiScore: 4.43,
    isSuperhost: true,
    amenities: ['무선인터넷', '주방', '세탁기', '에어컨', '수영장', '바베큐'],
    description: '이태원에서 도보 10분 거리의 펜션입니다.',
    categoryRatings: {
      cleanliness: { rating: 4.5, aiRating: 4.2 },
      accuracy: { rating: 4.3, aiRating: 4.1 },
      checkin: { rating: 4.3, aiRating: 4.0 },
      communication: { rating: 4.1, aiRating: 3.9 },
      location: { rating: 4.4, aiRating: 4.1 },
      value: { rating: 4.0, aiRating: 3.7 }
    }
  }
]

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Header />
      <div className="max-w-7xl mx-auto px-8 sm:px-16">
        {/* 히어로 섹션 */}
        <section className="pt-12 pb-8">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            당신의 완벽한 휴식을 찾아보세요
          </h1>
          <p className="text-xl text-gray-600">
            AI가 추천하는 최고의 숙소에서 특별한 경험을 만나보세요
          </p>
        </section>

        {/* 필터 섹션 */}
        <section className="flex space-x-4 mb-8 overflow-x-auto pb-4">
          <button className="px-4 py-2 bg-black text-white rounded-full whitespace-nowrap">
            전체
          </button>
          <button className="px-4 py-2 bg-white text-gray-800 rounded-full whitespace-nowrap hover:bg-gray-100">
            아파트
          </button>
          <button className="px-4 py-2 bg-white text-gray-800 rounded-full whitespace-nowrap hover:bg-gray-100">
            원룸
          </button>
          <button className="px-4 py-2 bg-white text-gray-800 rounded-full whitespace-nowrap hover:bg-gray-100">
            펜션
          </button>
          <button className="px-4 py-2 bg-white text-gray-800 rounded-full whitespace-nowrap hover:bg-gray-100">
            호텔
          </button>
        </section>

        {/* 추천 숙소 섹션 */}
        <section className="pb-12">
          <h2 className="text-3xl font-semibold mb-6">추천 숙소</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {demoAccommodations.map((accommodation) => (
              <AccommodationCard
                key={accommodation.id}
                accommodation={accommodation}
              />
            ))}
          </div>
        </section>

        {/* AI 추천 섹션 */}
        <section className="py-12 border-t">
          <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl p-8 text-white">
            <h2 className="text-3xl font-bold mb-4">AI가 추천하는 숙소</h2>
            <p className="text-lg mb-6">
              인공지능이 분석한 수많은 리뷰와 평점을 바탕으로<br />
              당신에게 가장 적합한 숙소를 추천해드립니다
            </p>
            <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              AI 추천 받기
            </button>
          </div>
        </section>
      </div>
    </main>
  )
} 