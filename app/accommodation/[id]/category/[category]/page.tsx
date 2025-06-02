'use client'

import React from 'react'
import Header from '../../../../components/Header'
import { useState, useEffect } from 'react'
import { Accommodation, Review } from '../../../../types'

interface PageProps {
  params: {
    id: string
    category: string
  }
}

const CategoryDetail = ({ params }: PageProps) => {
  const [accommodation, setAccommodation] = useState<Accommodation | null>(null)
  const [reviews, setReviews] = useState<Review[]>([])
  const [isLoading, setIsLoading] = useState(true)

  const categories = [
    { id: 'cleanliness', name: '청결도'},
    { id: 'accuracy', name: '정확도'},
    { id: 'checkin', name: '체크인'},
    { id: 'communication', name: '의사소통' },
    { id: 'location', name: '위치'},
    { id: 'value', name: '가격 대비 만족도'}
  ]

  const categoryKeywords = {
    cleanliness: ['깨끗', '청결', '위생', '청소'],
    accuracy: ['정확', '일치', '신뢰', '신뢰도'],
    checkin: ['체크인', '입실', '도착', '키'],
    communication: ['의사소통', '대화', '연락', '호스트'],
    location: ['위치', '교통', '역', '거리'],
    value: ['가격', '가성비', '비용', '값', '만족']
  }

  useEffect(() => {
    // 실제 구현에서는 API 호출로 대체
    const mockAccommodation: Accommodation = {
      id: params.id,
      title: '서울 시청 근처 아파트',
      location: '서울시 중구',
      price: 120000,
      rating: 4.7,
      reviewCount: 128,
      imageUrl: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267',
      aiScore: 4.32,
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
    }

    const mockReviews: Review[] = [
      {
        id: '1',
        userId: 'user1',
        userName: '김철수',
        rating: 4.8,
        aiRating: 4.7,
        comment: '정말 깨끗하고 편안한 숙소였습니다. 특히 청결도가 매우 만족스러웠어요.',
        date: '2024-03-15',
        isVerified: true,
        categoryRatings: {
          cleanliness: 4.5,
          accuracy: 4.3,
          checkin: 4.3,
          communication: 4.1,
          location: 4.4,
          value: 4.0
        }
      },
      {
        id: '2',
        userId: 'user2',
        userName: '이영희',
        rating: 4.0,
        aiRating: 3.7,
        comment: '체크인이 정말 편리했고, 위치도 좋았습니다. 다만 가격이 조금 비싸다고 느꼈어요.',
        date: '2024-03-10',
        isVerified: true,
        categoryRatings: {
          cleanliness: 4.0,
          accuracy: 4.2,
          checkin: 4.5,
          communication: 4.0,
          location: 4.3,
          value: 3.5
        }
      },
      {
        id: '3',
        userId: 'user3',
        userName: '박지민',
        rating: 4.1,
        aiRating: 3.9,
        comment: '호스트와의 의사소통이 원활했고, 위치도 좋았습니다. 청결도는 평균적이었어요.',
        date: '2024-03-05',
        isVerified: true,
        categoryRatings: {
          cleanliness: 3.5,
          accuracy: 4.4,
          checkin: 4.0,
          communication: 4.5,
          location: 4.2,
          value: 3.8
        }
      }
    ]

    setAccommodation(mockAccommodation)
    setReviews(mockReviews)
    setIsLoading(false)
  }, [params.id])

  const highlightText = (text: string, category: string) => {
    const keywords = categoryKeywords[category as keyof typeof categoryKeywords]
    let highlightedText = text
    keywords.forEach(keyword => {
      const regex = new RegExp(keyword, 'gi')
      highlightedText = highlightedText.replace(regex, match => 
        `<span class="bg-yellow-200">${match}</span>`
      )
    })
    return highlightedText
  }

  if (isLoading || !accommodation) {
    return <div className="flex justify-center items-center min-h-screen">로딩 중...</div>
  }

  const currentCategory = categories.find(cat => cat.id === params.category)
  const categoryRating = accommodation.categoryRatings[params.category as keyof typeof accommodation.categoryRatings]

  return (
    <div>
      <Header />
      <main className="max-w-7xl mx-auto px-8 sm:px-16">
        <div className="pt-6">
          <h1 className="text-3xl font-semibold mb-6">상세 평점</h1>
          
          {/* 카테고리 탭 */}
          <div className="flex space-x-4 mb-8 overflow-x-auto pb-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                className={`px-4 py-2 rounded-full whitespace-nowrap ${
                  params.category === cat.id
                    ? 'bg-black text-white'
                    : 'bg-gray-100 hover:bg-gray-200'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>

          {/* 평점 요약 */}
          <div className="bg-gray-50 p-6 rounded-xl mb-8">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-semibold mb-2">
                  {currentCategory?.name}
                </h2>
                <div className="flex items-center space-x-4">
                  <span className="text-3xl font-bold">{categoryRating.rating}</span>
                  <div className="flex items-center">
                    <span className="text-blue-500">AI {categoryRating.aiRating.toFixed(1)}</span>
                  </div>
                </div>
                <div className="mt-2 text-sm text-gray-600">
                  AI 정확도: {currentCategory?.accuracy}%
                </div>
              </div>
              <div className="text-right">
                <p className="text-gray-600">전체 리뷰</p>
                <p className="text-2xl font-semibold">{accommodation.reviewCount}개</p>
              </div>
            </div>
          </div>

          {/* 리뷰 목록 */}
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
                    <span>★ {review.categoryRatings[params.category as keyof typeof review.categoryRatings]}</span>
                    <span className="ml-2 text-blue-500">AI {review.aiRating.toFixed(1)}</span>
                  </div>
                </div>
                <p 
                  className="text-gray-700 mb-2"
                  dangerouslySetInnerHTML={{ 
                    __html: highlightText(review.comment, params.category)
                  }}
                />
                <p className="text-gray-500 text-sm">{review.date}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}

export default CategoryDetail 