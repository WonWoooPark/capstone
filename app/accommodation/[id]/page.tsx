'use client';

import React from 'react'
import Image from 'next/image'
import Header from '../../components/Header'
import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import { Accommodation, Review } from '../../types';
import CategoryReviewModal from '../../components/CategoryReviewModal';

const categoryKeywords = {
  cleanliness: ['깨끗', '청결', '위생', '청소'],
  accuracy: ['정확', '일치', '신뢰', '신뢰도'],
  checkin: ['체크인', '입실', '도착', '키'],
  communication: ['의사소통', '대화', '연락', '호스트'],
  location: ['위치', '교통', '역', '거리'],
  value: ['가격', '가성비', '비용', '값', '만족']
};

const AccommodationDetail = () => {
  const routerParams = useParams();
  const [accommodation, setAccommodation] = useState<Accommodation | null>(null);
  const [reviews, setReviews] = useState<Review[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [modalCategory, setModalCategory] = useState<string | null>(null);

  useEffect(() => {
    const id = routerParams.id as string;
    // 실제 구현에서는 API 호출로 대체
    const mockAccommodation: Accommodation = {
      id: id,
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
    };

    const mockReviews: Review[] = [
      {
        id: '1',
        userId: 'user1',
        userName: '김철수',
        rating: 5.0,
        aiRating: 5.0,
        comment: '정말 깨끗하고 편안한 숙소였습니다. 특히 청결도가 매우 만족스러웠어요.',
        date: '2024-03-15',
        isVerified: true,
        categoryRatings: {
          cleanliness: 5.0,
          accuracy: 0,
          checkin: 0,
          communication: 0,
          location: 0,
          value: 0
        }
      },
      {
        id: '2',
        userId: 'user2',
        userName: '이영희',
        rating: 4.8,
        aiRating: 4.2,
        comment: '체크인이 정말 편리했고, 위치도 좋았습니다. 다만 가격이 조금 비싸다고 느꼈어요.',
        date: '2024-03-10',
        isVerified: true,
        categoryRatings: {
          cleanliness: 0,
          accuracy: 0,
          checkin: 5,
          communication: 0,
          location: 4.7,
          value: 3.0
        }
      },
      {
        id: '3',
        userId: 'user3',
        userName: '박지민',
        rating: 4.2,
        aiRating: 3.8,
        comment: '호스트와의 의사소통이 원활했고, 위치도 좋았습니다. 청결도는 평균적이었어요.',
        date: '2024-03-05',
        isVerified: true,
        categoryRatings: {
          cleanliness: 3.5,
          accuracy: 0,
          checkin: 0,
          communication: 4.4,
          location: 4.4,
          value: 0
        }
      }
    ];

    setAccommodation(mockAccommodation);
    setReviews(mockReviews);
    setIsLoading(false);
  }, [routerParams.id]);

  if (isLoading || !accommodation) {
    return <div className="flex justify-center items-center min-h-screen">로딩 중...</div>;
  }

  return (
    <div>
      <Header />
      <main className="max-w-7xl mx-auto px-8 sm:px-16">
        <div className="pt-6">
          <h1 className="text-3xl font-semibold">{accommodation.title}</h1>
          <div className="flex items-center space-x-4 mt-2">
            <div className="flex items-center">
              <span className="text-sm">★ {accommodation.rating}</span>
              <span className="ml-2 text-sm text-blue-500">AI {accommodation.aiScore.toFixed(1)}</span>
            </div>
            <span className="text-gray-500">{accommodation.location}</span>
          </div>

          {/* 이미지 갤러리 */}
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="relative h-96">
              <Image
                src={accommodation.imageUrl}
                alt={accommodation.title}
                fill
                className="rounded-xl object-cover"
              />
            </div>
          </div>

          {/* 상세 정보 */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <div className="border-b pb-8">
                <h2 className="text-2xl font-semibold mb-4">숙소 설명</h2>
                <p className="text-gray-600">
                  {accommodation.description}
                </p>
              </div>

              {/* 상세 평점 */}
              <div className="py-8 border-b">
                <h2 className="text-2xl font-semibold mb-4">상세 평점</h2>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex justify-between items-center cursor-pointer" onClick={() => setModalCategory('cleanliness')}>
                    <span>청결도</span>
                    <div className="flex items-center">
                      <span>{accommodation.categoryRatings.cleanliness.rating}</span>
                      <span className="ml-2 text-blue-500">AI {accommodation.categoryRatings.cleanliness.aiRating.toFixed(1)}</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center cursor-pointer" onClick={() => setModalCategory('accuracy')}>
                    <span>정확도</span>
                    <div className="flex items-center">
                      <span>{accommodation.categoryRatings.accuracy.rating}</span>
                      <span className="ml-2 text-blue-500">AI {accommodation.categoryRatings.accuracy.aiRating.toFixed(1)}</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center cursor-pointer" onClick={() => setModalCategory('checkin')}>
                    <span>체크인</span>
                    <div className="flex items-center">
                      <span>{accommodation.categoryRatings.checkin.rating}</span>
                      <span className="ml-2 text-blue-500">AI {accommodation.categoryRatings.checkin.aiRating.toFixed(1)}</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center cursor-pointer" onClick={() => setModalCategory('communication')}>
                    <span>의사소통</span>
                    <div className="flex items-center">
                      <span>{accommodation.categoryRatings.communication.rating}</span>
                      <span className="ml-2 text-blue-500">AI {accommodation.categoryRatings.communication.aiRating.toFixed(1)}</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center cursor-pointer" onClick={() => setModalCategory('location')}>
                    <span>위치</span>
                    <div className="flex items-center">
                      <span>{accommodation.categoryRatings.location.rating}</span>
                      <span className="ml-2 text-blue-500">AI {accommodation.categoryRatings.location.aiRating.toFixed(1)}</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center cursor-pointer" onClick={() => setModalCategory('value')}>
                    <span>가격 대비 만족도</span>
                    <div className="flex items-center">
                      <span>{accommodation.categoryRatings.value.rating}</span>
                      <span className="ml-2 text-blue-500">AI {accommodation.categoryRatings.value.aiRating.toFixed(1)}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* 리뷰 섹션 */}
              <div className="py-8">
                <h2 className="text-2xl font-semibold mb-4">리뷰</h2>
                <div className="space-y-6">
                  {reviews.map((review) => (
                    <div key={review.id} className="border-b pb-6">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center">
                          <span className="font-semibold">{review.userName}</span>
                          {review.isVerified && (
                            <span className="ml-2 text-blue-600 text-sm">✓ 인증된 게스트</span>
                          )}
                        </div>
                        <div className="flex items-center">
                          <span>★ {review.rating}</span>
                          <span className="ml-2 text-blue-500">AI {review.aiRating.toFixed(1)}</span>
                        </div>
                      </div>
                      <p className="text-gray-700 mb-2">{review.comment}</p>
                      <div className="grid grid-cols-2 gap-2 text-sm text-gray-600 mb-2">
                        <div>청결도: {review.categoryRatings.cleanliness}</div>
                        <div>체크인: {review.categoryRatings.checkin}</div>
                        <div>의사소통: {review.categoryRatings.communication}</div>
                        <div>위치: {review.categoryRatings.location}</div>
                        <div>가성비: {review.categoryRatings.value}</div>
                      </div>
                      <p className="text-gray-500 text-sm">{review.date}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* 예약 섹션 */}
            <div className="md:col-span-1">
              <div className="sticky top-20 border rounded-xl p-6 shadow-lg">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-2xl font-semibold">₩{accommodation.price.toLocaleString()}</span>
                  <span className="text-gray-500">/ 박</span>
                </div>
                <button className="w-full bg-red-500 text-white py-3 rounded-lg hover:bg-red-600 transition-colors">
                  예약하기
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
      {modalCategory && (
        <CategoryReviewModal
          reviews={reviews}
          category={modalCategory}
          keywords={categoryKeywords[modalCategory]}
          onClose={() => setModalCategory(null)}
        />
      )}
    </div>
  )
}

export default AccommodationDetail; 